import CustomBlockManager from './CustomBlockManager';
import { BlocksProvider } from '../wrappers';
import React from 'react';
import CustomSectionsBlockManager from '@/components/editor/components/CustomSectionsBlockManager';
import CustomTemplatesBlockManager from '@/components/editor/components/CustomTemplatesBlockManager';

export default function BlockSideBar({ type }: any) {
  return (
    <BlocksProvider>
      {type === 'Blocks' ?
        (props => <CustomBlockManager {...props} />) : type === 'Sections' ?
          (props => <CustomSectionsBlockManager {...props} />) :
          (props => <CustomTemplatesBlockManager {...props} />)
      }
    </BlocksProvider>
  );
}