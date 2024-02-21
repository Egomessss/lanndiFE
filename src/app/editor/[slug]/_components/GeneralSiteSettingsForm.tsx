import React, { useState } from 'react'
import { Button, FileInput, TextInput, Textarea } from '@mantine/core'
import { IconFile } from '@tabler/icons-react'
import CodeMirror from '@uiw/react-codemirror'
import { langs } from '@uiw/codemirror-extensions-langs'
import { useForm, UseFormReturnType, zodResolver } from '@mantine/form'
import TextLength from '@/components/common/TextLength'
import { z } from 'zod'
import { notifications } from '@mantine/notifications'
import { redirect, useParams } from 'next/navigation'

import { revalidatePath } from 'next/cache'
import { useFormFetch } from '@/hooks/useFormFetch'


const GeneralSiteSettingsForm = ({ formData }) => {
    const params = useParams()

    const {
        data,
        isLoading,
        error,
        validationErrors,
        submitForm,
    } = useFormFetch(`/api/v1/sites/${params.slug}/update`)
    // console.log(error, validationErrors);
    const formSchema = z.object({
        title: z.string().max(60, 'Title must be at most 60 characters'),
        description: z.string().max(160, 'Description must be at most 160 characters'),
        favIco: z.instanceof(File).refine((file) => {
            return file.size <= 1024
        }, `File size should be less than 1gb.`).nullable().optional(), // Adjust based on the actual data type if needed
        ogImage: z.instanceof(File).refine((file) => {
            return file.size <= 1024
        }, `File size should be less than 1gb.`).nullable().optional(), // Adjust based on the actual data type if needed
        language: z.string().length(2, 'Language must be exactly 2 letters').regex(/^[A-Za-z]{2}$/, 'Language must use ISO Country Codes'),
        headCode: z.string().optional(), // Optional since it can be empty
        bodyCode: z.string().optional(), // Optional since it can be empty
    })

// Usage with useForm
    const form = useForm({
        initialValues: formData,
        validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
    })

    const submit = async (e) => {
        e.preventDefault()
        form.validate()


        form.errors

        Object.keys(validationErrors).forEach((key) => {
            form.setFieldError(key, validationErrors[key].join(', '))
        })

        notifications.show({
            title: 'Error',
            message: error,
            color: 'red',
        })

        if (form.isValid()) {
            await submitForm('POST', form.values, /* hasFiles */ true)
        }

        if (!error && data) {
            notifications.show({
                title: 'Success!',
                message: data?.message,
                color: 'green',
            })
            // revalidate cache
            revalidatePath('/')
        }
    }

    const onChangeHead = React.useCallback((val: string) => {
        form.setFieldValue('headCode', val)
    }, [form])


    const onChangeBody = React.useCallback((val: string) => {
        form.setFieldValue('bodyCode', val)
    }, [form])


    return (
        <form onSubmit={submit} className="flex items-start gap-8 flex-col my-4 w-full">
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
                <Button type="submit" loading={isLoading}>Save Changes</Button>
            </div>
        </form>
    )
}

export default GeneralSiteSettingsForm