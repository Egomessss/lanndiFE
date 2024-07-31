'use client';

import EditorReusable from '@/components/editor/EditorReusable';
// export const dynamic = 'force-dynamic'
export default function CustomEditor() {
  const isDemo = false;

  return (
    <EditorReusable isDemo={isDemo} />
  )
    ;
}

