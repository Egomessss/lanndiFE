import { ActionIcon, Button, Menu, NavLink, TextInput, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'


import { PagesResultProps } from '../wrappers'
import { IconCheck, IconDots, IconFile, IconTrash } from '@tabler/icons-react'
import { modals } from '@mantine/modals'
import { Page } from 'grapesjs'

export default function CustomPageManager({
                                              pages,
                                              selected,
                                              add,
                                              select,
                                              remove,
                                          }: PagesResultProps) {
    const [editingPageId, setEditingPageId] = useState<string | null>(null)


    const openModal = (pageToDelete:Page) => modals.openConfirmModal({
        centered: true,
        title: 'Please confirm your action',
        children: (
            <Text size="sm">
               Are you sure you want to delete your page?
            </Text>
        ),
        labels: { confirm: 'Delete', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () =>  remove(pageToDelete),
    });


    const addNewPage = () => {
        const nextIndex = pages.length + 1
        add({
            name: `New page ${nextIndex}`,
            component: `<h1>Page content ${nextIndex}</h1>`,
        })
    }

    const duplicatePage = (pageToDuplicate:any) => {
        add({
            name: `${pageToDuplicate.getName()} (Copy)`,
            component: pageToDuplicate.component, // Assuming component data is stored like this
        })
    }

    return (
        <div
            className="gjs-custom-page-manager relative select-none text-left text-xs flex flex-col gap-2"
        >
            <Button onClick={addNewPage} size="xs" variant="subtle">Add new page</Button>
            {pages.map((page, index) => (
                <div key={index}>
                    {editingPageId === page.getId() ? (
                        <TextInput
                            size="xs"
                            onChange={(e) => page.setName(e.target.value)}
                            placeholder="New page name"
                            rightSection={
                                <ActionIcon size="sm"
                                    onClick={() => setEditingPageId(null)}
                                >
                                    <IconCheck size="1rem" />
                                </ActionIcon>
                            }
                        />
                    ) : (
                        <Button
                            fullWidth
                            justify="space-between"
                            // leftSection={<IconFile size="1rem" />}
                            key={page.getId()}
                            size="xs"
                            variant={page === selected ? 'filled' : 'subtle'}
                            onClick={() => select(page)}
                            rightSection={
                                <Menu
                                    shadow="md"
                                    width={200}
                                    position="bottom-end"
                                    offset={10}
                                >
                                    <Menu.Target>
                                        <ActionIcon size="sm" variant="subtle">
                                            <IconDots size="1rem"

                                            />
                                        </ActionIcon>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Label>Page Settings</Menu.Label>
                                        <Menu.Item
                                            onClick={() =>
                                                setEditingPageId(page.getId())
                                            }
                                        >
                                            Rename
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => duplicatePage(page)}
                                        >
                                            Duplicate
                                        </Menu.Item>

                                        <Menu.Divider />

                                        <Menu.Label>Danger zone</Menu.Label>

                                        <Menu.Item
                                            onClick={() => openModal(page)}
                                            color="red"
                                            leftSection={<IconTrash size="1rem" />}
                                        >
                                            Delete page
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            }
                        >{page.getName() || 'Untitled page'}</Button>
                    )}
                </div>
            ))}
        </div>
    )
}
