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


const SiteSettingsForm = (props: { plan: string; data: SiteSettings }) => {
    const { plan, data } = props;
    const {
      name,
      title,
      description,
      favIcon,
      ogImage,
      language,
      headCode,
      bodyCode,
      slug,
    } = data;
    console.log(favIcon, ogImage);

    const queryClient = useQueryClient();

    const formSchema = z.object({
      name: z.string().max(60, 'Title must be at most 60 characters'),
      title: z.string().max(60, 'Title must be at most 60 characters'),
      description: z.string().max(160, 'Description must be at most 160 characters'),
      favIcon: z.instanceof(File).refine((file) => {
        return file.size <= 1024 * 1024; // Adjusting to 1MB in bytes
      }, `File size should be less than 1mb.`).nullable(),
      ogImage: z.instanceof(File).refine((file) => {
        return file.size <= 1024 * 1024; // Adjusting to 1MB in bytes
      }, `File size should be less than 1mb.`).nullable(),
      language: z.string().length(2, 'Language must be exactly 2 letters').regex(/^[A-Za-z]{2}$/, 'Language must use ISO Country Codes'),
      headCode: z.string().optional(), // Optional since it can be empty
      bodyCode: z.string().optional(), // Optional since it can be empty
    });


// Usage with useForm
    const form = useForm({
      initialValues: {
        name: name || '', // Shorthand for title: title
        title: title || '', // Shorthand for title: title
        description: description || '', // Defaults to what's passed in, or you can provide a fallback
        favIcon: null, // Defaults to null if favIco is not provided
        ogImage: null, // Defaults to null if ogImage is not provided
        language: language || 'en', // Default to 'en' if language is not provided
        headCode: headCode || '', // Shorthand for headCode: headCode
        bodyCode: bodyCode || '', // Shorthand for bodyCode: bodyCode
      },
      validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
    });

    const { mutate: submitSite, isPending } = useMutation({
        mutationFn: async () => {
          const formData = new FormData();
          // Append text fields
          formData.append('name', form.values.name);
          formData.append('title', form.values.title);
          formData.append('description', form.values.description);
          formData.append('language', form.values.language);
          formData.append('headCode', form.values.headCode);
          formData.append('bodyCode', form.values.bodyCode);

          // Append file fields if they exist
          if (form.values.favIcon) {
            formData.append('favIcon', form.values.favIcon);
          }

          if (form.values.ogImage) {
            formData.append('ogImage', form.values.ogImage);
          }

          // Use Axios to send formData
          return await axios.post(`/api/v1/sites/settings/${slug}/update`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // This is important
            },
          });
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

    console.log('plan', plan);

    const onChangeHead = React.useCallback((val: string) => {
      form.setFieldValue('headCode', val);
    }, [form]);


    const onChangeBody = React.useCallback((val: string) => {
      form.setFieldValue('bodyCode', val);
    }, [form]);

    const validateBeforeSubmit = () => {
      form.validate();
      const isValid = form.isValid();
      if (isValid) {
        submitSite();
      }
    };


    return (
      <div className="flex items-start gap-8 flex-col my-4 w-full">
        <TextInput className="w-full"
                   label="Site name"
                   placeholder="Insert your site name here..."
                   {...form.getInputProps('name')}
                   rightSectionWidth="40"
                   rightSection={form.getInputProps('name').value &&
                     <TextLength maxLength={60} value={form.getInputProps('name').value} />}
        />
        <Divider className="w-full" my="xs" label="Site metadata settings" />
        <TextInput className="w-full"
                   label="Title"
                   placeholder="Insert your title here..."
                   {...form.getInputProps('title')}
                   rightSectionWidth="40"
                   rightSection={form.getInputProps('title').value &&
                     <TextLength maxLength={60} value={form.getInputProps('title').value} />}
        />
        <Textarea className="w-full"
                  label="Description"
                  placeholder="Insert your description here..."
                  {...form.getInputProps('description')}
                  rightSectionWidth="60"
                  rightSection={form.getInputProps('description').value &&
                    <TextLength maxLength={160} value={form.getInputProps('description').value} />}
        />
        <div className="flex items-start gap-2 flex-col justify-start w-full">
          <FileInput className="w-full"
                     clearable
                     label="Social media image"
            // accept="image/png,image/jpeg, image/jpg"
                     description="1200 x 630 pixels. PNG, JPEG or JPG. Shown when shared on social media."
                     leftSection={<IconFile size="1rem" />}
                     placeholder="Upload file"
                     {...form.getInputProps('ogImage')} />
          <p>Image preview</p>
          {form.values.ogImage && (
            <img
              className="w-[160px] h-[90px] rounded-lg object-contain"
              src={URL.createObjectURL(form.values.ogImage)}
              alt="post thumbnail preview image"
            />
          )}
          {ogImage !== null && (
            <div>
              <p>Previous Social Media Image</p>
              <img
                className="w-[120px] h-[80px] rounded-lg object-contain"
                //@ts-ignore
                src={ogImage}
                alt="post social media previous image"
              />
            </div>
          )}

        </div>
        {plan !== 'free' ? <>
            <div className="flex items-start gap-2 flex-col justify-start w-full">
              <FileInput className="w-full"
                         label="Favicon"
                         clearable
                // accept="image/png,image/jpeg,image/jpg, image/webp, image/svg+xml, image/x-icon"
                // accept="image/png,image/jpeg, image/webp"
                         description="32 x 32 pixels. ICO, PNG, SVG, or JPG. Shown in browser tabs."
                         leftSection={<IconFile size="1rem" />}
                         placeholder="Upload file"
                         {...form.getInputProps('favIcon')} />
              <p>Preview</p>
              {form.values.favIcon && (
                <img className="w-[32px] h-[32px] rounded-lg"
                     src={URL.createObjectURL(form.values.favIcon)}
                     alt="post favicon image " />)}
              {favIcon !== null && (<div><p>Previous Favicon</p>
                <img className="w-[32px] h-[32px] rounded-lg object-contain"
                  //@ts-ignore
                     src={favIcon}
                     alt="post previous favicon image " /></div>)}
            </div>


            {/*<TextInput className="w-full"*/}
            {/*           label="Site language"*/}
            {/*           {...form.getInputProps('language')}*/}
            {/*/>*/}

            <div className="flex items-start gap-2 flex-col w-full">
              <h2>Custom head code</h2>

              <div className="w-full">
                <CodeMirror
                  value={form.values.headCode} height="200px" theme="dark"
                  extensions={[langs.javascript()]}
                  onChange={onChangeHead} />
              </div>
            </div>

            {/*<div className="flex items-start gap-2 flex-col w-full">*/}
            {/*  <h2>Custom body code</h2>*/}

            {/*  <div className="w-full">*/}
            {/*    <CodeMirror*/}
            {/*      value={form.values.bodyCode} height="200px" theme="dark"*/}
            {/*      extensions={[langs.javascript()]}*/}
            {/*      onChange={onChangeBody}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
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

export default SiteSettingsForm;