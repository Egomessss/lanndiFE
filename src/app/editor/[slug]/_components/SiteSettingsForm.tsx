import React from 'react';
import { Button, FileInput, Textarea, TextInput } from '@mantine/core';
import { IconFile } from '@tabler/icons-react';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { notifications } from '@mantine/notifications';
import { SiteSettings } from '@/app/(app)/sites/[slug]/settings/page';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TextLength from '@/components/common/TextLength';
import axios from '@/lib/axios';

type SiteSettingsProps = {
  title: string,
  description: string,
  favIcon: File | string,
  ogImage: File | string,
  language: string,
  headCode: string,
  bodyCode: string,
  slug: string
}

const SiteSettingsForm = ({
                            title,
                            description,
                            favIcon,
                            ogImage,
                            language,
                            headCode,
                            bodyCode,
                            slug,
                          }: SiteSettingsProps) => {

  console.log(ogImage);
  const queryClient = useQueryClient();

  const formSchema = z.object({
    title: z.string().max(60, 'Title must be at most 60 characters'),
    description: z.string().max(160, 'Description must be at most 160 characters'),
    favIcon: z.instanceof(File).refine((file) => {
      return file.size <= 1024 * 1024; // Adjusting to 1MB in bytes
    }, `File size should be less than 1mb.`).nullable().optional(),
    ogImage: z.instanceof(File).refine((file) => {
      return file.size <= 1024 * 1024; // Adjusting to 1MB in bytes
    }, `File size should be less than 1mb.`).nullable().optional(),
    language: z.string().length(2, 'Language must be exactly 2 letters').regex(/^[A-Za-z]{2}$/, 'Language must use ISO Country Codes'),
    headCode: z.string().optional(), // Optional since it can be empty
    bodyCode: z.string().optional(), // Optional since it can be empty
  });


// Usage with useForm
  const form = useForm({
    initialValues: {
      title: title || '', // Shorthand for title: title
      description: description || '', // Defaults to what's passed in, or you can provide a fallback
      favIcon: favIcon || null, // Defaults to null if favIco is not provided
      ogImage: ogImage || null, // Defaults to null if ogImage is not provided
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
        return await axios.post(`/api/v1/sites/${slug}/update`, formData, {
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
          console.log('error', error);
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
                 label="Title"
                 placeholder="Insert your title here..."
                 {...form.getInputProps('title')}
                 rightSectionWidth="40"
                 rightSection={form.getInputProps('title').value &&
                   <TextLength maxLength={60} value={form.getInputProps('title').value} />}
      />
      <Textarea className="w-full"
                label="Description"
                placeholder="Insert your title here..."
                {...form.getInputProps('description')}
                rightSectionWidth="60"
                rightSection={form.getInputProps('description').value &&
                  <TextLength maxLength={160} value={form.getInputProps('description').value} />}
      />
      <div className="flex items-start gap-2 flex-col justify-start w-full">
        <FileInput className="w-full"
                   label="Social media image"
                   accept="image/png,image/jpeg, image/webp, image/"
                   description="1200 x 630 pixels. PNG, SVG, JPG or Webp. Shown when shared on social media."
                   leftSection={<IconFile size="1rem" />}
                   placeholder="Upload file"
                   {...form.getInputProps('ogImage')} />
        {/*<p>Image preview</p>*/}
        {/* {form.values.ogImage && (*/}
        {/*   <img*/}
        {/*     className="h-[515px] w-[270px] rounded-lg object-contain"*/}
        {/*     src={URL.createObjectURL(form.values.ogImage)}*/}
        {/*     alt="post thumbnail preview image"*/}
        {/*   />*/}
        {/* )}*/}
        {/*{favIcon !== undefined && (*/}
        {/*    <div>*/}
        {/*        <p>Previous Image</p>*/}
        {/*        <img*/}
        {/*             className="h-[515px] w-[270px] rounded-lg object-contain"*/}
        {/*                    src={favIcon}*/}
        {/*            alt="post thumbnail previous image"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*)}*/}

      </div>
      <div className="flex items-start gap-2 flex-col justify-start w-full">
        <FileInput className="w-full"
                   label="Favicon"
                   accept="image/png,image/jpeg, image/webp"
                   description="32 x 32 pixels. ICO, PNG, SVG, or JPG. Shown in browser tabs."
                   leftSection={<IconFile size="1rem" />}
                   placeholder="Upload file"
                   {...form.getInputProps('favIcon')} />
        {/*<p>Preview</p>*/}
        {/*<img className="w-[120px] h-[80px] rounded-lg"*/}
        {/*     src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"*/}
        {/*     alt="" />*/}
        {/*<p>Previous</p>*/}
        {/*<img className="w-[120px] h-[80px] rounded-lg"*/}
        {/*     src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"*/}
        {/*     alt="" />*/}
      </div>


      <TextInput className="w-full"
                 label="Site language"
                 {...form.getInputProps('language')}
      />

      <div className="flex items-start gap-2 flex-col w-full">
        <h2>Custom head code</h2>

        <div className="w-full">
          <CodeMirror
            value={form.values.headCode} height="200px" theme="dark"
            extensions={[langs.javascript()]}
            onChange={onChangeHead} />
        </div>
      </div>

      <div className="flex items-start gap-2 flex-col w-full">
        <h2>Custom body code</h2>

        <div className="w-full">
          <CodeMirror
            value={form.values.bodyCode} height="200px" theme="dark"
            extensions={[langs.javascript()]}
            onChange={onChangeBody}
          />
        </div>
      </div>
      <div className="flex items-end justify-end w-full">
        <Button onClick={validateBeforeSubmit} loading={isPending}>Save Changes</Button>
      </div>
    </div>
  );
};

export default SiteSettingsForm;