import React from 'react';
import { Alert, Button, Divider, FileInput, Textarea, TextInput } from '@mantine/core';
import { IconFile, IconInfoCircle } from '@tabler/icons-react';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { notifications } from '@mantine/notifications';
import { SiteSettings } from '@/app/(sites)/settings/[slug]/page';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TextLength from '@/components/common/TextLength';
import axios from '@/lib/axios';
import Link from 'next/link';


const SiteSettingsFonts = (props: { plan: string; data: SiteSettings }) => {
    const { plan, data } = props;
    const {
      // fonts,
      slug,
    } = data;

    const validateGoogleFonts = (fonts) => {
      const googleFontsPattern = /^https:\/\/fonts\.googleapis\.com\/css2\?family=[^&]+(&family=[^&]+)*&display=swap$/;
      return fonts.every(font => googleFontsPattern.test(font.link));
    };

    const queryClient = useQueryClient();

    const formSchema = z.object({
      fonts: z.array(z.object({
        name: z.string().min(1, 'Name is required'),
        link: z.string().regex(/^https:\/\/fonts\.googleapis\.com\/css2\?family=[^&]+(&family=[^&]+)*&display=swap$/, 'Fonts must be valid Google Fonts URLs')
      })).max(5, 'You can specify a maximum of 5 font entries')
    });

// Usage with useForm
    const form = useForm({
      initialValues: {
        fonts: [], // Initialize the fonts field as an empty array
      },
      validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
    });

    const { mutate: submitSite, isPending } = useMutation({
        mutationFn: async () => {

          // Use Axios to send formData
          return await axios.post(`/api/v1/sites/settings/${slug}/fonts/update`, form.values);
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
        {form.values.fonts.map((fontEntry, index) => (
          <div key={index} className="w-full">
            <TextInput
              className="w-full"
              label={`Font Entry ${index + 1} Name`}
              placeholder="Insert font entry name here..."
              {...form.getInputProps(`fonts.${index}.name`)}
            />
            <TextInput
              className="w-full"
              label={`Font Entry ${index + 1} URL`}
              placeholder="Insert Google Fonts URL here..."
              {...form.getInputProps(`fonts.${index}.link`)}
            />
          </div>
        ))}
        <Button
          onClick={() => form.setFieldValue('fonts', [...form.values.fonts, { name: '', link: '' }])}
        >
          Add Font Entry
        </Button>
        <div className="flex items-end justify-end w-full">
          <Button onClick={validateBeforeSubmit} loading={isPending}>Save Changes</Button>
        </div>
      </div>
    );
  }
;

export default SiteSettingsFonts;