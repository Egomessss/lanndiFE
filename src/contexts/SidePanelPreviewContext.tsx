'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type SidePanelContextType = {
  isSidePanelOpen: boolean;
  openSidePanel: () => void;
  closeSidePanel: () => void;
};
// Step 1: Create a new context
const SidePanelContext = createContext<SidePanelContextType | undefined>(undefined);

// Step 2: Create a provider component
export function SidePanelProvider({ children }: { children: ReactNode }) {
  const [isSidePanelOpen, setSidePanelOpen] = useState(true);

  const openSidePanel = () => setSidePanelOpen(true);
  const closeSidePanel = () => setSidePanelOpen(false);
  // console.log('isSidePanelOpen', isSidePanelOpen);


  return (
    <SidePanelContext.Provider value={{ isSidePanelOpen, openSidePanel, closeSidePanel }}>
      {children}
    </SidePanelContext.Provider>
  );
}

// Custom hook to use the SidePanel context
export function useSidePanel() {
  const context = useContext(SidePanelContext);
  if (!context) {
    throw new Error('useSidePanel must be used within a SidePanelProvider');
  }
  return context;
}