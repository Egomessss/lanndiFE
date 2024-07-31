'use client';

import React from 'react';
import EditorReusable from '@/components/editor/EditorReusable';
import { demoEditorConfigOptions } from '@/components/editor/utils/demo-options';
export default function CustomEditor() {

  const isDemo = true;
  return (
    <EditorReusable  isDemo={isDemo}  editorConfigOptions={demoEditorConfigOptions}/>
  );
}

