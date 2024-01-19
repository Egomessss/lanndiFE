import { ActionIcon, Menu, NavLink, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'


import { PagesResultProps } from '../wrappers'
import { IconCheck, IconDots, IconFile, IconTrash } from '@tabler/icons-react'

export default function CustomPageManager({
    pages,
    selected,
    add,
    select,
    remove,
}: PagesResultProps) {
    const [editingPageId, setEditingPageId] = useState<string | null>(null)
    const [pageToDelete, setPageToDelete] = useState(null) // new state variable

    const openDeleteModal = (page) => {
        setPageToDelete(page)
        open()
    }

    const confirmDelete = () => {
        if (pageToDelete) {
            remove(pageToDelete)
        }
        close()
    }

    const [opened, { open, close }] = useDisclosure(false)

    const addNewPage = () => {
        const nextIndex = pages.length + 1
        add({
            name: `New page ${nextIndex}`,
            component: `<h1>Page content ${nextIndex}</h1>`,
        })
    }

    const duplicatePage = (pageToDuplicate) => {
        add({
            name: `${pageToDuplicate.getName()} (Copy)`,
            component: pageToDuplicate.component, // Assuming component data is stored like this
        })
    }

    return (
        <div
            className="gjs-custom-page-manager relative select-none text-left text-xs p-2"
        >
            {pages.map((page, index) => (
                <div key={index}>
                    {editingPageId === page.getId() ? (
                        <TextInput
                            onChange={(e) => page.setName(e.target.value)}
                            placeholder="Your name"
                            rightSection={
                                <ActionIcon
                                    onClick={() => setEditingPageId(null)}
                                >
                                    <IconCheck />
                                </ActionIcon>
                            }
                        />
                    ) : (
                        <NavLink
                            variant="filled"
                            label={page.getName() || 'Untitled page'}
                            leftSection={<IconFile />}
                            key={page.getId()}
                            active={page === selected}
                            onClick={() => select(page)}
                            className="rounded-lg"
                            rightSection={
                                <Menu
                                    shadow="md"
                                    width={200}
                                    position="bottom-end"
                                    offset={10}
                                >
                                    <Menu.Target>
                                        <ActionIcon variant="subtle">
                                            <IconDots
                                                className={
                                                    selected && 'text-white'
                                                }
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
                                            onClick={() => remove(page)}
                                            color="red"
                                            leftSection={<IconTrash />}
                                        >
                                            Delete page
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            }
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
