// import React from 'react'
// import { useDisclosure } from '@mantine/hooks'
// import {
//     Modal,
//     Button,
//     ActionIcon,
//     Tooltip,
//     Title,
//     Tabs,
//     ScrollArea,
// } from '@mantine/core'
// import { usePage } from '@inertiajs/react'
// import { PageProps } from '@/types'
// import { LuLayoutTemplate } from 'react-icons/lu'
//
// const TemplatesModal = () => {
//     const user = usePage<PageProps>().props.auth.user
//
//     const [opened, { open, close }] = useDisclosure(user === null)
//     return (
//         <>
//             <Modal
//                 opened={opened}
//                 onClose={close}
//                 centered
//                 closeOnClickOutside
//                 closeOnEscape
//                 fullScreen
//                 scrollAreaComponent={ScrollArea.Autosize}
//                 size="100%"
//             >
//                 <div className="flex flex-col justify-center gap-4 ">
//                     <Title
//                         order={1}
//                         className="w-full py-4 text-center"
//                     >Choose a template</Title>
//                     <div className=" flex w-full items-center justify-center">
//                         <Tabs defaultValue="all">
//                             <Tabs.List>
//                                 <Tabs.Tab value="all">All</Tabs.Tab>
//                                 <Tabs.Tab value="landing">
//                                     Landing pages
//                                 </Tabs.Tab>
//                                 <Tabs.Tab value="profile">Profile</Tabs.Tab>
//                                 <Tabs.Tab value="portfolio">Portfolio</Tabs.Tab>
//                                 <Tabs.Tab value="leadmagnet">
//                                     Lead magnet
//                                 </Tabs.Tab>
//                                 <Tabs.Tab value="newsletter">
//                                     Newsletter
//                                 </Tabs.Tab>
//                             </Tabs.List>
//
//                             <Tabs.Panel value="all">
//                                 <div className="grid-col-4 grid ">
//                                     <div className="col-span-1 h-52 rounded-lg border-solid">
//                                         <img
//                                             src=""
//                                             alt=""
//                                         />
//                                         <Title
//                                             order={2}
//                                             className="w-full py-20 text-center"
//                                         >
//                                             Template #1
//                                         </Title>
//                                     </div>
//                                     <div className="col-span-1 h-52 rounded-lg border-solid">
//                                         <img
//                                             src=""
//                                             alt=""
//                                         />
//                                         <Title
//                                             order={2}
//                                             className="w-full py-20 text-center"
//                                         >
//                                             Template #1
//                                         </Title>
//                                     </div>
//                                     <div className="col-span-1 h-52 rounded-lg border-solid">
//                                         <img
//                                             src=""
//                                             alt=""
//                                         />
//                                         <Title
//                                             order={2}
//                                             className="w-full py-20 text-center"
//                                         >
//                                             Template #1
//                                         </Title>
//                                     </div>
//                                 </div>
//                             </Tabs.Panel>
//
//                             <Tabs.Panel value="messages">
//                                 Messages tab content
//                             </Tabs.Panel>
//
//                             <Tabs.Panel value="settings">
//                                 Settings tab content
//                             </Tabs.Panel>
//                         </Tabs>
//                     </div>
//                 </div>
//
//             </Modal>
//
//             <Tooltip label="Open templates manager">
//                 <ActionIcon onClick={open}>
//                     <LuLayoutTemplate />
//                 </ActionIcon>
//             </Tooltip>
//         </>
//     )
// }
//
// export default TemplatesModal
