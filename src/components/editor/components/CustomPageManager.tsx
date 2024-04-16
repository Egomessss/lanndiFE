import {
  ActionIcon,
  Button,
  Menu,
  NavLink,
  TextInput,
  Text,
  Tooltip,
  Modal,
  Divider,
  Textarea,
  FileInput, ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';


import { PagesResultProps, useEditor } from '../wrappers';
import {
  IconCheck,
  IconDots, IconDotsVertical,
  IconExclamationCircle,
  IconFile,
  IconLink,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import { Editor, Page } from 'grapesjs';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import TextLength from '@/components/common/TextLength';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { notifications } from '@mantine/notifications';
import useUser from '@/hooks/use-user';

type CreatePageProps = {
  editingPageId: string
  pages: Page[],
  add: any,
  opened: boolean
  onClose: () => void
}


function CreatePageModal({ editingPageId, pages, add, opened, onClose }: CreatePageProps) {

  const editor = useEditor();

  const page = editor.Pages.get(editingPageId);
  const pageName = editor.Pages.get(editingPageId)?.getName();
  const pageData = editor.Pages.get(editingPageId)?.attributes;
  console.log(pageData);

  const formSchema = z.object({
    name: z.string().max(60, 'Title must be at most 60 characters'),
    title: z.string().max(60, 'Title must be at most 60 characters'),
    description: z.string().max(160, 'Description must be at most 160 characters'),
    slug: z.string()
      .max(160, 'Slug must be at most 160 characters')
      .refine(slug => slug === slug.toLowerCase(), {
        message: 'Slug must be all lowercase',
      })
      .refine(slug => !/\s/.test(slug), {
        message: 'Slug must not contain spaces. Use \'-\' to separate words.',
      }),
  });

  useEffect(() => {
    // This assumes getProjectData is synchronous; if not, adjust accordingly.
    form.setValues({ name: pageName });
    // @ts-ignore
    form.setValues({ slug: page?.attributes.slug });
  }, [editingPageId, opened]);

  const form = useForm({
    initialValues: {
      name: 'Insert page name here',
      slug: 'Insert slug here',
      component: pageData?.component || `<h1>Page content</h1>`,
      title: pageData?.title || '',
      description: pageData?.description || '',
    },
    validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
  });

  const validateBeforeSubmit = () => {
    form.validate();
    const isValid = form.isValid();
    if (isValid && page?.attributes.slug !== 'index') {
      page?.set(form.values);
      notifications.show({
        title: 'Success!',
        message: 'Your page settings has been successfully saved!',
        color: 'green',
      });
      onClose();
    }
  };

  console.log(form.values);
  return <Modal centered size="lg" scrollAreaComponent={ScrollArea.Autosize} opened={opened} onClose={onClose}
                title={`${pageName} Page Settings`}>
    <div className="flex items-start gap-4 flex-col my-4 w-full">
      <TextInput className="w-full"
                 label="Page name"
                 placeholder="Insert your site name here..."
                 {...form.getInputProps('name')}
                 rightSectionWidth="40"
      />
      {form.getInputProps('slug').value === 'index' &&
        <p className="text-red-500 text-xs">Set homepage settings in site settings</p>}
      <div className="flex  gap-2 flex-col w-full">
        <TextInput className="w-full"
                   disabled={form.getInputProps('slug').value === 'index'}
                   label="Page Slug"
                   description="Slug must be all lowercase and must not contain spaces. Use '-' to separate words. "
                   placeholder="Insert your site slug here..."
                   {...form.getInputProps('slug')}
                   rightSectionWidth="40"
        />
        <div className="flex  gap-2"><IconLink size="1rem" />      <p
          className="text-xs">/{form.getInputProps('slug').value}</p></div>
      </div>


      <Divider className="w-full" my="xs" label="Page metadata settings" />
      <TextInput className="w-full"
                 label="Title"
                 disabled={form.getInputProps('slug').value === 'index'}
                 placeholder="Insert your title here..."
                 {...form.getInputProps('title')}
                 rightSectionWidth="40"
                 rightSection={form.getInputProps('title').value &&
                   <TextLength maxLength={60} value={form.getInputProps('title').value} />}
      />
      <Textarea className="w-full"
                label="Description"
                disabled={form.getInputProps('slug').value === 'index'}
                placeholder="Insert your description here..."
                {...form.getInputProps('description')}
                rightSectionWidth="60"
                rightSection={form.getInputProps('description').value &&
                  <TextLength maxLength={160} value={form.getInputProps('description').value} />}
      />

    </div>
    <div className="flex items-end justify-end w-full">
      <Button onClick={validateBeforeSubmit}
        // loading={isPending}
      >Save Changes</Button>
    </div>
  </Modal>
    ;
}

export default function CustomPageManager({
                                            pages,
                                            selected,
                                            add,
                                            select,
                                            remove,
                                          }: PagesResultProps) {
  const [editingPageId, setEditingPageId] = useState<string>('');
  const [opened, { open, close }] = useDisclosure(false);
  const { user } = useUser();

  const openModal = (pageToDelete: Page) => {

    if (pageToDelete.attributes.slug === 'index') {
      modals.openConfirmModal({
        centered: true,
        title: 'Action not allowed',
        children: (
          <Text size="sm">
            The homepage cannot be deleted.
          </Text>
        ),
        confirmProps: { color: 'blue' },
        labels: { confirm: 'OK', cancel: '' }, // You might adjust these labels as needed
        onCancel: () => console.log('OK'),
        onConfirm: () => console.log('OK'),
      });
    } else {
      modals.openConfirmModal({
        centered: true,
        title: 'Please confirm your action',
        children: (
          <Text size="sm">
            Are you sure you want to delete your page?
          </Text>
        ),
        confirmProps: { color: 'red' },
        labels: { confirm: 'Delete', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => remove(pageToDelete),
      });
    }
  };


  const addNewPage = () => {
    const maxPages = user?.subscription === 'admin' ? Infinity : user?.subscription === 'free' ? 1 : 10;
    if (pages.length < maxPages) {
      const nextIndex = pages.length + 1;
      add({
        name: `page ${pages.length + 1}`,
        slug: '',
        component: `<h1>Page content ${nextIndex}</h1>`,
        title: '',
        description: '',
      });
    }
  };

  const duplicatePage = (pageToDuplicate: any) => {
    const maxPages = user?.subscription === 'admin' ? Infinity : user?.subscription === 'free' ? 1 : 10;
    if (pages.length < maxPages) {
      add({
        name: `${pageToDuplicate.getName()} (Copy)`,
        component: pageToDuplicate.component, // Assuming component data is stored like this
        slug: '',
        title: '',
        description: '',
      });
    }
  };


  // user is free subscription dont allow more than one page

  return (
    <div
      className="gjs-custom-page-manager relative select-none text-left text-xs flex flex-col gap-2"
    >
      {user?.subscription === 'free' ? <Tooltip
        label="Free users cannot add more pages. Subscribe to a plan to add more pages."
        color="red"
      >
        <Button disabled={user?.subscription === 'free'} leftSection={<IconPlus size="1rem" />}

                onClick={addNewPage} size="xs" variant="subtle">Add page</Button>
      </Tooltip> : <Button disabled={user?.subscription === 'free'} leftSection={<IconPlus size="1rem" />}

                           onClick={addNewPage} size="xs" variant="subtle">Add page</Button>}
      {pages.map((page, index) => (
        <div key={index}>
          <Button
            fullWidth
            justify="space-between"
            // leftSection={<IconFile size="1rem" />}
            key={page.getId()}
            size="xs"
            variant={page === selected ? 'filled' : 'subtle'}
            onClick={() => select(page)}
            rightSection={page.attributes.slug === 'index' || user?.subscription !== 'free' ?
              <Menu
                shadow="md"
                width={200}
                position="right-start"
                offset={10}
                // disabled={page.attributes.slug === 'index'}
              >
                <Menu.Target>
                  <ActionIcon size="sm" variant="subtle">
                    <IconDotsVertical size="1rem"
                    />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Page Settings</Menu.Label>
                  <Menu.Item
                    disabled={page.attributes.slug === 'index'}
                    onClick={() => {
                      setEditingPageId(page.getId());
                      open();
                    }
                    }
                  >
                    {page.attributes.slug === 'index' ? 'Edit homepage in site settings' : 'Edit'}
                  </Menu.Item>
                  {/*<Menu.Item*/}
                  {/*  disabled={page.attributes.slug !== 'index' }*/}
                  {/*  onClick={() => duplicatePage(page)}*/}
                  {/*>*/}
                  {/*  Duplicate*/}
                  {/*</Menu.Item>*/}
                  <Menu.Divider />
                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item
                    disabled={page.attributes.slug === 'index'}
                    onClick={() => openModal(page)}
                    color="red"
                    leftSection={<IconTrash size="1rem" />}
                  >
                    {page.attributes.slug === 'index' ? 'Can\'t delete homepage' : 'Delete page'}
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu> :
              <Tooltip label="Edit your homepage setting in site settings">
                <IconExclamationCircle size="1rem"
                />
              </Tooltip>
            }
          >{page.getName() || 'Untitled page'}</Button>
        </div>
      ))}
      <CreatePageModal editingPageId={editingPageId} pages={pages} add={add} opened={opened} onClose={close} />
    </div>
  );
}
