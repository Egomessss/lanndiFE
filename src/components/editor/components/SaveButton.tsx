import { useEditorMaybe } from '@/components/editor/context/EditorInstance';
import { useParams } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useEditorData from '@/hooks/use-editor-data';
import { useIdle } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import axios from '@/lib/axios';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconCheck, IconDeviceFloppy, IconFaceIdError } from '@tabler/icons-react';

interface Payload {
  projectId: string | string[];
  data: any; // Consider specifying a more precise type for your project data
  pagesData?: any[]; // Adjust the type according to the structure of your pages data
}

export function SaveButton({ canAutosaveLoadedData }: { canAutosaveLoadedData: boolean }) {

  const editor = useEditorMaybe();
  const params = useParams();
  const siteSlug = params.slug;
  const queryClient = useQueryClient();
  const [showSuccess, setShowSuccess] = useState(false);
  const { data: isNotFirstTimeSaving } = useEditorData();
  const idle = useIdle(300000); // 5mins idle

  console.log('can auto', canAutosaveLoadedData);


  const showNotification = (color: string, title: string, message: string) => {
    notifications.show({
      color,
      title,
      message,
    });
  };


  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (autoSave?:boolean) => {
      const endpoint = `api/v1/editor/${siteSlug}/`;
      const url = isNotFirstTimeSaving?.data ? `${endpoint}update` : `${endpoint}store`;
      const method = isNotFirstTimeSaving?.data ? 'patch' : 'post';

      const payload:Payload = {
        projectId: siteSlug,
        data: editor?.getProjectData(),
        pagesData: [],
      };

      if (autoSave !== true) {
        payload.pagesData = editor?.Pages.getAll().map(page => {
          const component = page.getMainComponent();
          const pageData = page.attributes;
          return {
            pageId: pageData.id,
            name: pageData.name,
            slug: pageData.slug,
            title: pageData.title,
            description: pageData.description,
            html: editor.getHtml({ component}),
            css: editor.getCss({ component}),
            js: editor.getJs({ component }),
          };
        });
      }

      await axios({
        method: method,
        url: url,
        data: payload,
      });
    },
    onError: (error) => {
      // @ts-ignore
      const status = error.response?.status;
      let errorMessage = 'Something went wrong... Please try again!';
      if (status === 422) {
        // @ts-ignore
        const errorData = error.response.data;
        const missingFieldsMessage = errorData.missingFields ? ` Missing fields: ${errorData.missingFields.join(', ')}.` : '';
        errorMessage = `${errorData.message || 'Validation error occurred'}${missingFieldsMessage}`;
      } else if (status >= 500) {
        errorMessage = 'A server error occurred. Please try again later.';
      } else if (status === 401 || status === 419) {
        errorMessage = 'Log in before you can save your data.';
      } else if (status === 403) {
        errorMessage = 'You do not have the necessary permissions.';
      } else if (status === 404) {
        errorMessage = 'The requested resource could not be found.';
      }
      showNotification('red', 'Error', errorMessage);
    },
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      queryClient.invalidateQueries({ queryKey: ['editorData', siteSlug] });
    },
  });

  useEffect(() => {
    const canAutoSave = isNotFirstTimeSaving?.data !== null && !idle && canAutosaveLoadedData;

    console.log('can autosave', canAutoSave);
    // Only set up autosaving if the condition is met
    if (canAutoSave) {
      const saveIntervalId = setInterval(() => {
        handleSave(true);
      }, 120000); // Autosave every 2 minutes

      return () => clearInterval(saveIntervalId);
    }
  }, [mutate, idle, isNotFirstTimeSaving?.data, canAutosaveLoadedData]);

  const handleSave = (autoSave?: boolean) => {
    mutate(autoSave);
  };


  const color = isError ? 'red' : showSuccess ? 'green' : 'blue';

  return (
    <Tooltip color="dark"
             w={250}
             multiline
             label={<div className="flex flex-col gap-4">
               <p>Save changes - Saved automatically every 2 minutes. </p>
               <p>Every
                 Site is cached which means your changes will take 15 seconds to take effect after inital page load</p>
               <p>Autosave functionality doesn&apos;t update your preview pages only by clicking you can update</p>
             </div>}>
      <ActionIcon
        disabled={isPending}
        loading={isPending}
        className={!showSuccess ? 'animate-pulse' : ''}
        color={color}
        onClick={() => handleSave(false)}
        variant="subtle"
      >
        {isError && <IconFaceIdError size="1rem" />}
        {!isPending && showSuccess ? <IconCheck size="1rem" /> : <IconDeviceFloppy size="1rem" />}
      </ActionIcon>
    </Tooltip>
  );
}