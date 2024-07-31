'use client';
import { editorConfigOptions } from '@/components/editor/utils/options';

import EditorReusable from '@/components/editor/EditorReusable';
// export const dynamic = 'force-dynamic'
export default function CustomEditor() {
  const isDemo = false;

  return (
    <EditorReusable editorConfigOptions={editorConfigOptions} isDemo={isDemo} />
  )
    ;
}

