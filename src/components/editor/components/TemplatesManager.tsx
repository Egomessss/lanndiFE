import React from 'react'
import { ActionIcon, Modal, Tooltip } from '@mantine/core'
import { IconTemplate } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

const TemplatesManager = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div>
            <Modal size="xl" centered opened={opened} onClose={close} title="Templates">
                {/* Modal content */}
            </Modal>
            <Tooltip label="Templates">
                <ActionIcon onClick={open} variant="subtle">
                    <IconTemplate size="1rem" />
                </ActionIcon>
            </Tooltip>
        </div>
    )
}

export default TemplatesManager