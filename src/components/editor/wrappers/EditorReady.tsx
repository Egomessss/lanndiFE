import { useEffect, memo } from 'react';
import { useEditorOptions } from '../context/EditorOptions';

const EditorReady = memo(function() {
  const options = useEditorOptions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => options.setReady(true), []);
  return <></>;
});

EditorReady.displayName = 'EditorReady';

export default EditorReady;
