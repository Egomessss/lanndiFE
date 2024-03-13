import { Loader } from '@mantine/core';
import React from 'react';

export function EditorLoading() {
  return <div className="flex items-center gap-4 flex-col h-screen w-full items-center justify-center"><Loader
    color="blue" type="bars" /><p>Loading the
    editor</p></div>;
}