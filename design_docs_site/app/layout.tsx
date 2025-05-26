import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SiteLayout from '@/components/SiteLayout'; // Import SiteLayout

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Design Docs Site',
  description: 'UI/UX Design Guide for Developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
