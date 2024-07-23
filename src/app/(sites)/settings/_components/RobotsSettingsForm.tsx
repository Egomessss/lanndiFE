import React from 'react';
import { Alert, Button, Divider, Textarea, TextInput } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TextLength from '@/components/common/TextLength';
import axios from '@/lib/axios';
import Link from 'next/link';
import { SiteSettings } from '@/app/(sites)/settings/[slug]/page';


const SiteRobotsSettingsForm = (props: { plan: string; data: SiteSettings }) => {
    const { plan, data } = props;
    const {
      robots,
      slug,
    } = data;
    console.log(robots);
    const { userAgent, allow, disallow, sitemap } = robots;

    const queryClient = useQueryClient();

    const formSchema = z.object({
      userAgent: z.string().max(1600, 'User Agent must be at most 1600 characters'),
      allow: z.string().max(1600, 'Allow must be at most 1600 characters'),
      disallow: z.string().max(160, 'Disallow must be at most 160 characters'),
    });


// Usage with useForm
    const form = useForm({
      initialValues: {
        userAgent: userAgent || '', // Shorthand for title: title
        allow: allow || '', // Shorthand for title: title
        disallow: disallow || '', // Defaults to what's passed in, or you can provide a fallback
      },
      validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
    });

    const { mutate: submitSite, isPending } = useMutation({
        mutationFn: async () => {
          // Use Axios to send formData
          return await axios.patch(`/api/v1/sites/${slug}/robots-settings/update`, form.values);
        },
        onSuccess:
          (data) => {
            const responseData = data?.data; // Assuming your data is nested under a 'data' key
            if (responseData) {
              notifications.show({
                title: 'Success!',
                message: responseData.message,
                color: 'green',
              });
              queryClient.invalidateQueries({ queryKey: ['siteSettings', slug] });
            }
          }
        ,
        onError:
          (error) => {
            // @ts-ignore
            if (error.response.status === 422) {
              // Handle Laravel validation errors
              // @ts-ignore
              form.setErrors(error.response.data.errors || {});
            } else {
              notifications.show({
                title: 'Error',
                message: 'Something went wrong... Please try again!',
                color: 'red',
              });
            }
          },
      },
    );


    const validateBeforeSubmit = () => {
      form.validate();
      const isValid = form.isValid();
      if (isValid) {
        submitSite();
      }
    };


    return (
      <div className="flex items-start gap-8 flex-col my-4 w-full">
        <h3>Robots.txt</h3>
        <p>
          The <code>robots.txt</code> file is used to instruct web robots (typically search engine robots) about which
          pages on your site to crawl or not to crawl. It&apos;s a way to control and manage the access of robots to your
          website, ensuring that sensitive areas or pages that should not be indexed are kept out of search engine
          results for more information visit: <a href="https://www.robotstxt.org/" target="_blank">robotstxt.org</a>.
        </p>
        <p>Your website wont be indexed until you change your disallow</p>
        <TextInput className="w-full"
                   label="User Agent"
                   placeholder="Insert your user agent here..."
                   {...form.getInputProps('userAgent')}
        />

        <Textarea className="w-full"
                  label="Allow"
                  placeholder="Insert your allows here..."
                  {...form.getInputProps('allow')}
        />
        <Textarea className="w-full"
                  label="Disallow"
                  placeholder="Insert your disallows here..."
                  {...form.getInputProps('disallow')}
        />
        {plan !== 'free' ? <>
          </>
          : <Alert className="w-full" variant="light" color="red" title="Alert title"
                   icon={<IconInfoCircle size="1rem" />}>
            <p>Buy a subscription plan to take advantage of custom code and all the metadata options such as custom head
              code
              and favicon.</p>
            <p className="font-bold text-red-500 my-10">PS: Save your settings/editor data before clicking the link
              button</p>
            <Button fullWidth component={Link} href="/plans">
              Buy a plan
            </Button>
          </Alert>}
        <div className="flex items-end justify-end w-full">
          <Button onClick={validateBeforeSubmit} loading={isPending}>Save Changes</Button>
        </div>
      </div>
    );
  }
;

export default SiteRobotsSettingsForm;