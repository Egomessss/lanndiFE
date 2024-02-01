import React from 'react'
import { ActionIcon, Modal, Tooltip } from '@mantine/core'
import { IconSettings } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

const SettingsModal = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <Modal size="xl" centered opened={opened} onClose={close} title="Settings">
                {/* Modal content */}
            </Modal>
            <Tooltip label="Page Settings">
                <ActionIcon onClick={open} variant="subtle">
                    <IconSettings size="1rem" />
                </ActionIcon>
            </Tooltip>
        </div>
    )
}

export default SettingsModal