import * as React from 'react';
import { Box, Modal, ModalProps } from '@mantine/core';
import { IconX } from '@tabler/icons-react';



export default function CustomModal({
                                      children,
                                      title,
                                      close,
                                      ...props
                                    }: any) {
  return (
    <Modal size="xl" centered opened={props.open} onClose={close} {...props}>
      <div className="flex pb-3">
        <div className="flex-grow text-lg">{title}</div>

      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </Modal>
  );
}
