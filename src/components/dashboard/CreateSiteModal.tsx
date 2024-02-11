'use client'

import React, { useEffect } from 'react'
import { Button, Modal, TextInput } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { useFormFetch } from '@/hooks/useFormFetch'
import { redirect } from 'next/navigation'
import { notifications } from '@mantine/notifications'

const CreateSiteModal = () => {
    const [opened, { open, close }] = useDisclosure(false)


    const { data, loading, error, validationErrors, submitForm } = useFormFetch('/api/v1/sites/store')
    console.log("data",data)
    const form = useForm({
        initialValues: {
            name: '',
            subdomain: '',
        },
        validate: {
            name: (value) => {
                if (typeof value !== 'string') return 'Name must be a string'
                if (value.length <= 5) return 'Name must have at least 5 letters'
                return null
            },
            subdomain: (value) => {
                if (typeof value !== 'string') return 'Subdomain must be a string'
                if (value.length <= 5) return 'Subdomain must have at least 5 letters'
                return null
            },
        },
    })

    const submit = async (e) => {
        e.preventDefault()
        form.validate()

        if (form.isValid()) {

            // You might need to adjust the method (POST, PATCH, etc.) and the format of the data submitted
            await submitForm('POST', form.values, /* hasFiles */ false)

            if (!error && Object.keys(validationErrors).length === 0) {

            } else {
                console.log('errors form', validationErrors)
                // Handle server-side validation errors
                // Update form with server-side validation errors
                Object.keys(validationErrors).forEach((key) => {
                    form.setFieldError(key, validationErrors[key].join(', '))
                })
            }
        }
    }


    useEffect(() => {
        if (data && data.success) {
            notifications.show({
                title: 'Success!',
                message: data.message,
                color: 'green',
            })
            close() // Close modal on successful submission
            //  redirect user
            redirect(`/editor/${data.slug}`)
        } else if (error) {
            console.log(error)
            notifications.show({
                title: 'Error',
                message: error,
                color: 'red',
            })

        }
    }, [data, error])

    return (
        <>
            <Button onClick={open} rightSection={<IconPlus size="1rem" />}>New Site</Button>
            <Modal centered opened={opened} onClose={close} title="Create your site">
                <form onSubmit={submit} className="gap-4 flex flex-col ">
                    <TextInput
                        withAsterisk
                        label="Site Name"
                        placeholder="Insert site name here..."
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        withAsterisk
                        label="Site subdomain"
                        placeholder="Insert site subdomain here..."
                        {...form.getInputProps('subdomain')}
                    />
                    <Button loading={loading} type="submit">Create Site</Button>
                </form>
            </Modal>
        </>
    )
}

export default CreateSiteModal