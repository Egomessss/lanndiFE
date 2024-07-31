'use client';

import React from 'react';
import EditorReusable from '@/components/editor/EditorReusable';

export default function CustomEditor() {

  const isDemo = true;
  return (
    <EditorReusable isDemo={isDemo} />
  );
}

