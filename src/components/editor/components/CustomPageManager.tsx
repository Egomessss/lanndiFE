import {
  ActionIcon,
  Button,
  Divider,
  Menu,
  Modal,
  ScrollArea,
  Text,
  Textarea,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { PagesResultProps, useEditor } from '../wrappers';
import { IconDotsVertical, IconExclamationCircle, IconLink, IconPlus, IconTrash } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import { Page } from 'grapesjs';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import TextLength from '@/components/common/TextLength';
import { notifications } from '@mantine/notifications';
import useUser from '@/hooks/use-user';

interface ExtendedPage extends Page {
  attributes: {
    name:string;
    slug: string;
    title: string;
    description: string;
    [key: string]: any; // For any other attributes that might be present
  };
}
// Update EditPageModal props
interface EditPageProps {
  editingPage: Page | null;
  opened: boolean;
  onClose: () => void;
}

interface CreatePageProps {
  editingPageId: string;
  pages: Page[];
  opened: boolean;
  onClose: () => void;
}

interface PageExtras {
  slug?: string;
  title?: string;
  description?: string;
}


const formSchema = z.object({
  name: z.string().max(60, 'Title must be at most 60 characters'),
  title: z.string().max(60, 'Title must be at most 60 characters'),
  description: z.string().max(160, 'Description must be at most 160 characters'),
  slug: z.string()
    .max(160, 'Slug must be at most 160 characters')
    .refine(slug => slug === slug.toLowerCase(), {
      message: 'Slug must be all lowercase',
    })
    .refine(slug => /^[a-z0-9-\/]+$/.test(slug), {
      message: 'Slug can only contain lowercase letters, numbers, hyphens (-), and forward slashes (/)',
    })
    .refine(slug => !/^-|-$/.test(slug), {
      message: 'Slug cannot start or end with a hyphen',
    })
    .refine(slug => !/^\/|\/\/|\/\/$/.test(slug), {
      message: 'Slug cannot start or end with a forward slash, and cannot contain consecutive forward slashes',
    }),
});

export function EditPageModal({ editingPage, opened, onClose }: EditPageProps) {
  const editor = useEditor();
  console.log('page edit',editingPage);

  const form = useForm({
    initialValues: {
      name: '',
      slug: '',
      title: '',
      description: '',
    },
    validate: zodResolver(formSchema),
  });

  useEffect(() => {
    if (editingPage) {
      const extras = editingPage.attributes as PageExtras;
      form.setValues({
        name: editingPage.getName() || '',
        slug: extras.slug || '',
        title: extras.title || '',
        description: extras.description || '',
      });
    }
  }, [editingPage]);;

  const handleSubmit = (values: typeof form.values) => {
    if (editingPage) {
      editingPage.set('name', values.name);
      // Update the extra properties
      const extras: PageExtras = {
        slug: values.slug,
        title: values.title,
        description: values.description,
      };
      editingPage.set('attributes', { ...editingPage.attributes, ...extras });
      editor.Pages.select(editingPage.getId());
      notifications.show({
        title: 'Success!',
        message: 'Your page settings have been successfully saved!',
        color: 'green',
      });
      onClose();
    }
  };

  return (
    <Modal
      centered
      size="lg"
      scrollAreaComponent={ScrollArea.Autosize}
      opened={opened}
      onClose={onClose}
      title={`Edit ${editingPage?.getName()} page settings`}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex items-start gap-4 flex-col my-4 w-full">
          <TextInput
            className="w-full"
            label="Page name"
            placeholder="Insert your page name here..."
            {...form.getInputProps('name')}
          />
          <div className="flex gap-2 flex-col w-full">
            <TextInput
              className="w-full"
              label="Page Slug"
              description="Slug must be all lowercase and must not contain spaces. Use '-' to separate words and '/' to separate paths."
              placeholder="Insert your page slug here..."
              {...form.getInputProps('slug')}
            />
            {form.values.slug === 'index' && (
              <p className="text-red-500 text-xs">/index should be reserved for your homepage</p>
            )}
            <div className="flex gap-2">
              <IconLink size="1rem" />
              <p className="text-xs">/{form.values.slug}</p>
            </div>
          </div>

          <Divider className="w-full" my="xs" label="Page metadata settings" />
          {form.values.slug === 'index' && (
            <p className="text-red-500 text-xs">Set homepage(/index) metadata in site settings</p>
          )}
          <TextInput
            className="w-full"
            label="Title"
            disabled={form.values.slug === 'index'}
            placeholder="Insert your title here..."
            {...form.getInputProps('title')}
            rightSection={form.values.title && (
              <TextLength maxLength={60} value={form.values.title} />
            )}
          />
          <Textarea
            className="w-full"
            label="Description"
            disabled={form.values.slug === 'index'}
            placeholder="Insert your description here..."
            {...form.getInputProps('description')}
            rightSectionWidth={40}
            rightSection={form.values.description && (
              <TextLength maxLength={160} value={form.values.description} />
            )}
          />
        </div>
        <div className="flex items-end justify-end w-full">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Modal>
  );
}

function CreatePageModal({ editingPageId, opened, onClose }: CreatePageProps) {

  const editor = useEditor();
  const page = editor.Pages.get(editingPageId) as ExtendedPage | undefined;

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


  const form = useForm({
    initialValues: {
      name: '',
      slug: '',
      component: '',
      title: '',
      description: '',
    },
    validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
  });

  const validateBeforeSubmit = () => {
    form.validate();
    const isValid = form.isValid();
    if(isValid){
      page?.set(form.values);
      // @ts-ignore
      editor.Pages.select(editingPageId);
      // @ts-ignore
      notifications.show({
        title: 'Success!',
        message: 'Your page settings has been successfully saved!',
        color: 'green',
      });

      // @ts-ignore
      editor.Pages.select(editingPageId);
      onClose();
    }

  };

  return <Modal centered size="lg" scrollAreaComponent={ScrollArea.Autosize} opened={opened} onClose={onClose}
                title='Create Page'>
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
                   label="Page Slug"
                   description="Slug must be all lowercase and must not contain spaces. Use '-' to separate words.And '/' to separate paths."
                   placeholder="Insert your site slug here..."
                   {...form.getInputProps('slug')}
                   rightSectionWidth="40"
        />
        {form.getInputProps('slug').value === 'index' &&
          <p className="text-red-500 text-xs">/index should be reserved for your homepage</p>}
        <div className="flex  gap-2"><IconLink size="1rem" />      <p
          className="text-xs">/{form.getInputProps('slug').value}</p></div>
      </div>


      <Divider className="w-full" my="xs" label="Page metadata settings" />
      {form.getInputProps('slug').value === 'index' &&
        <p className="text-red-500 text-xs">Set homepage(/index) metadata in site settings</p>}
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
  const [editingPage, setEditingPage] = useState<Page | null>(null);
  const [createModalOpened, createModalHandlers] = useDisclosure(false);
  const [editModalOpened, editModalHandlers] = useDisclosure(false);

  const { user } = useUser();

  // pages frames are being deleted when i select another page
  console.log('pages', pages);

  const openEditModal = (page: Page) => {
    setEditingPage(page);
    editModalHandlers.open();
  };

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
        closeOnConfirm: true,
        labels: { confirm: 'Delete', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => {
          remove(pageToDelete);
          select(pages[0]);
        },
      });
    }
  };


  const addNewPage = () => {
    const maxPages = user?.subscription === 'admin' ? Infinity : user?.subscription === 'free' || user?.subscription === 'basic-monthly' || user?.subscription === 'basic-yearly' ? 1 : 10;
    if (pages.length <= maxPages) {
      const nextIndex = pages.length + 1;
      // Assuming `add` now returns the ID of the newly added page
      const newPage = add({
        //  @ts-ignore
        name: `page ${nextIndex}`,
        slug: '',
        component: '',
        title: 'Boilerplate title',
        description: 'Boilerplate description',
      });
      // Update the editingPageId with the ID of the new page
      // @ts-ignore
      setEditingPageId(newPage?.id);
      // Open the modal for editing the new page
      createModalHandlers.open();
    }
  };

  // const duplicatePage = (pageToDuplicate: any) => {
  //   const maxPages = user?.subscription === 'admin' ? Infinity : user?.subscription === 'free' ? 1 : 10;
  //   if (pages.length < maxPages) {
  //     add({
  //       name: `${pageToDuplicate.getName()} (Copy)`,
  //       component: pageToDuplicate.component, // Assuming component data is stored like this
  //       slug: '',
  //       title: '',
  //       description: '',
  //     });
  //   }
  // };


  return (
    <div
      className="gjs-custom-page-manager relative select-none text-left text-xs flex flex-col gap-2"
    >
      {user?.subscription === 'basic-monthly' || user?.subscription === 'basic-yearly' ? <Tooltip
        label="Basic users cannot add more pages. Subscribe to a different plan to add more pages."
        color="red"
      >
        <Button disabled={user?.subscription === 'basic-monthly' || user?.subscription === 'basic-yearly'}
                leftSection={<IconPlus size="1rem" />}
                onClick={addNewPage} size="xs" variant="subtle">Add page</Button>
      </Tooltip> : <Button disabled={user?.subscription === 'free'} leftSection={<IconPlus size="1rem" />}
                           onClick={addNewPage} size="xs" variant="subtle">Add page</Button>}
      {pages.map((page, index) => (
        <div key={index}>
          <Button
            fullWidth
            justify="space-between"
            key={page.getId()}
            size="xs"
            variant={page === selected ? 'filled' : 'subtle'}
            onClick={() => select(page)}
            rightSection={
              page.attributes.slug === 'index' || user?.subscription !== 'free' ? (
                <Menu
                  shadow="md"
                  width={200}
                  position="right-start"
                  offset={10}
                >
                  <Menu.Target>
                    <ActionIcon size="sm" variant="subtle">
                      <IconDotsVertical size="1rem" />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Page Settings</Menu.Label>
                    <Menu.Item onClick={() => openEditModal(page)}>
                      Edit
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
              ) : (
                <Tooltip label="Edit your homepage setting in site settings">
                  <IconExclamationCircle size="1rem" />
                </Tooltip>
              )
            }
          >
            {page.getName() || 'Untitled page'}
          </Button>
        </div>
      ))}

      <CreatePageModal
        opened={createModalOpened}
        onClose={createModalHandlers.close}
        pages={pages}
        editingPageId={editingPageId}
      />

      <EditPageModal
        editingPage={editingPage}
        opened={editModalOpened}
        onClose={editModalHandlers.close}
      />
    </div>
  );
}
