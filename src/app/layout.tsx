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
import { SidePanelProvider } from '@/contexts/SidePanelPreviewContext';
import { CSPostHogProvider } from '@/contexts/PostHogProvider';
// import { CSPostHogProvider } from '@/contexts/PostHogProvider';

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
      <script defer src="https://cloud.umami.is/script.js"
              data-website-id="926180c0-ced2-44d6-94a2-70149d477560"></script>
      <ColorSchemeScript defaultColorScheme="auto" />
    </head>
    <body className={inter.className}>
    <TanstackProvider>
      <MantineProvider defaultColorScheme="auto">
        <Notifications />
        <ModalsProvider>
          <SidePanelProvider>
            <CSPostHogProvider>
              {children}
            </CSPostHogProvider>
          </SidePanelProvider>
        </ModalsProvider>
      </MantineProvider>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </TanstackProvider>
    </body>
    </html>
  );

}
