// import React, { FormEventHandler, useEffect } from 'react'
// import { ActionIcon, Divider, Drawer, ScrollArea, Textarea, TextInput, Title } from '@mantine/core'
// import { useDisclosure } from '@mantine/hooks'
// import { IconDeviceFloppy } from '@tabler/icons-react'
//
//
// const CreateUserAndPageModal = () => {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         username: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     })
//
//     useEffect(() => {
//         return () => {
//             reset('password', 'password_confirmation')
//         }
//     }, [])
//
//     const submit: FormEventHandler = (e) => {
//         e.preventDefault()
//
//         post(route('register'))
//     }
//
//     const [opened, { open, close }] = useDisclosure(false)
//     return (
//         <>
//             <ActionIcon
//                 onClick={open}
//                 variant="outline"
//             >
//                 <IconDeviceFloppy />
//             </ActionIcon>
//             <Drawer
//                 opened={opened}
//                 onClose={close}
//                 title="Authentication"
//                 closeOnClickOutside
//                 closeOnEscape
//                 scrollAreaComponent={ScrollArea.Autosize}
//             >
//                 <div className="flex w-full items-center justify-center gap-2 text-center">
//                     <Title
//                         className="whitespace-nowrap text-start"
//                         order={2}
//                     >
//                         Create a lanndi Account
//                     </Title>
//                 </div>
//
//                 <form
//                     className="w-full"
//                     onSubmit={submit}
//                 >
//                     <div>
//                         <TextInput
//                             id="name"
//                             label="Name"
//                             className="w-full"
//                             placeholder="Your name"
//                             autoComplete="name"
//                             value={data.name}
//                             onChange={(e) => setData('name', e.target.value)}
//                             required
//                             radius="md"
//                             withAsterisk
//                             error={errors.name}
//                         />
//                     </div>
//
//                     <div className="mt-4">
//                         <TextInput
//                             required
//                             label="Email"
//                             placeholder="Your email"
//                             autoComplete="email"
//                             value={data.email}
//                             onChange={(e) => setData('email', e.target.value)}
//                             className="mt-1 block w-full"
//                             radius="md"
//                             type="email"
//                             error={errors.email}
//                         />
//                     </div>
//
//                     <div className="mt-4 w-full">
//                         <PasswordInputStrengthMeter
//                             text="Password"
//                             value={data.password}
//                             setData={(e: any) =>
//                                 setData('password', e.target.value)
//                             }
//                             errors={errors.password}
//                         />
//                     </div>
//                     <div className="mt-4 w-full">
//                         <PasswordInputStrengthMeter
//                             text="Confirm your password"
//                             value={data.password_confirmation}
//                             setData={(e: any) =>
//                                 setData('password_confirmation', e.target.value)
//                             }
//                             errors={errors.password_confirmation}
//                         />
//                     </div>
//
//                     <Divider
//                         variant="dashed"
//                         my="lg"
//                         label="Site settings"
//                         labelPosition="center"
//                     />
//
//                     <TextInput
//                         required
//                         label="Title"
//                         placeholder="Your email"
//                         autoComplete="email"
//                         value={data.email}
//                         onChange={(e) => setData('email', e.target.value)}
//                         className="mt-1 block w-full"
//                         radius="md"
//                         type="email"
//                         error={errors.email}
//                     />
//                     <Textarea
//                         required
//                         label="Description"
//                         placeholder="Your email"
//                         autoComplete="email"
//                         value={data.email}
//                         onChange={(e) => setData('email', e.target.value)}
//                         className="mt-1 block w-full"
//                         radius="md"
//                         error={errors.email}
//                     />
//                 </form>
//             </Drawer>
//         </>
//     )
// }
//
// export default CreateUserAndPageModal