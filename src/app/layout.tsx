
import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Inter } from 'next/font/google';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import TanstackProvider from '@/components/providers/TanstackProvider';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SidePanelProvider } from '@/contexts/SidePanelPreviewContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'lanndi',
  description: 'Create your dream website in minutes',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <ColorSchemeScript defaultColorScheme="auto" />
    </head>
    <body className={inter.className}>
    <TanstackProvider>
      <MantineProvider defaultColorScheme="auto">
        <Notifications />
        <ModalsProvider>
          <SidePanelProvider>
          {children}
          </SidePanelProvider>
        </ModalsProvider>
      </MantineProvider>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </TanstackProvider>
    </body>
    </html>
  );

}
