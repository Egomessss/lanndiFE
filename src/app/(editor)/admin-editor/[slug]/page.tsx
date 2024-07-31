'use client';

import React from 'react';
import EditorReusable from '@/components/editor/EditorReusable';
import { editorConfigOptions } from '@/components/editor/utils/admin-options';

// export const dynamic = 'force-dynamic'
export default function CustomEditor() {


  const isDemo = false;

  return (
   <EditorReusable editorConfigOptions={editorConfigOptions} isDemo={isDemo} />
  )
    ;
}

