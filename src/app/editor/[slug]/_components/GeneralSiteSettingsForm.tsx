import React, { useState } from 'react';
import { Button, FileInput, TextInput, Textarea } from '@mantine/core';
import { IconFile } from '@tabler/icons-react';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useForm, UseFormReturnType } from '@mantine/form';
import TextLength from '@/components/common/TextLength';


const GeneralSiteSettingsForm = () => {
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      favIco: null,
      ogImage: null,
      language: 'en',
      headCode: '',
      bodyCode: '',
    },
    // validate: {
    //     name: (value) => {
    //         if (typeof value !== 'string') return 'Name must be a string'
    //         if (value.length <= 5) return 'Name must have at least 5 letters'
    //         return null
    //     },
    //     subdomain: (value) => {
    //         if (typeof value !== 'string') return 'Subdomain must be a string'
    //         if (value.length <= 5) return 'Subdomain must have at least 5 letters'
    //         return null
    //     },
    // },
  });


  const onChangeHead = React.useCallback((val: string) => {
    console.log('val:', val);
    form.setFieldValue('headCode', val);
  }, [form]);


  const onChangeBody = React.useCallback((val: string) => {
    console.log('val:', val);
    form.setFieldValue('bodyCode', val);
  }, [form]);


  console.log(form.values);
  return (
    <form className="flex items-start gap-8 flex-col my-4 w-full">
      <TextInput
        label="Title"
        description="Description"
        placeholder="Insert your title here..."
        {...form.getInputProps('title')}
        rightSectionWidth="40"
        rightSection={<TextLength maxLength={60} value={form.values.title} />}
      />
      <Textarea
        label="Description"
        description="Description"
        placeholder="Insert your title here..."
        {...form.getInputProps('description')}
        rightSectionWidth="60"
        rightSection={<TextLength maxLength={160} value={form.values.description} />}
      />
      <div className="flex items-start gap-2 flex-col justify-start">
        <FileInput
          label="Social media image"
          description="1200 x 630 pixels. PNG, SVG, JPG or Webp. Shown when shared on social media."
          leftSection={<IconFile size="1rem" />}
          placeholder="Upload file"  {...form.getInputProps('ogImage')} />
        <p>Image preview</p>
        {form.values.ogImage && (
          <img
            className="h-[515px] w-[270px] rounded-lg object-contain"
            src={URL.createObjectURL(form.values.ogImage)}
            alt="post thumbnail preview image"
          />
        )}
        {/*{postData !== undefined && (*/}
        {/*    <div>*/}
        {/*        <p>Previous Image</p>*/}
        {/*        <img*/}
        {/*             className="h-[515px] w-[270px] rounded-lg object-contain"
                {/*            src={postData.postLogoThumbnail}*/}
        {/*            alt="post thumbnail previous image"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*)}*/}

      </div>
      <div className="flex items-start gap-2 flex-col justify-start">
        <FileInput
          label="Favicon"
          description="32 x 32 pixels. ICO, PNG, SVG, or JPG. Shown in browser tabs."
          leftSection={<IconFile size="1rem" />}
          placeholder="Upload file"  {...form.getInputProps('favIco')} />
        <p>Preview</p>
        <img className="w-[120px] h-[80px] rounded-lg"
             src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             alt="" />
        <p>Previous</p>
        <img className="w-[120px] h-[80px] rounded-lg"
             src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             alt="" />
      </div>


      <TextInput
        label="Site language"
        {...form.getInputProps('language')}
      />

      <div className="flex items-start gap-2 flex-col w-full">
        <div className="flex justify-between w-full"><h2>Custom head code</h2>
        </div>
        <div className="w-full">
          <CodeMirror
            value={form.values.headCode} height="200px" theme="dark"
            extensions={[langs.javascript()]}
            onChange={onChangeHead} />
        </div>
      </div>

      <div className="flex items-start gap-2 flex-col w-full">
        <div className="flex justify-between w-full"><h2>Custom body code</h2>
        </div>
        <div className="w-full">
          <CodeMirror
            value={form.values.bodyCode} height="200px" theme="dark"
            extensions={[langs.javascript()]}
            onChange={onChangeBody}
          />
        </div>
      </div>
      <div className="flex items-end justify-end w-full">
        <Button>Save Changes</Button></div>
    </form>
  );
};

export default GeneralSiteSettingsForm;