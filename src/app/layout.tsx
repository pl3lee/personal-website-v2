import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Billy Lee - Full Stack Developer',
  description: 'Billy Lee - Full Stack Developer',
  keywords: [
    'Billy Lee',
    'Billy',
    'Lee',
    'Software',
    'Web',
    'Developer',
    'University',
    'Waterloo',
    'Student',
    'Math',
    'Mathematics',
    'Computer',
    'Science',
    'Computer Science',
    'Uwaterloo',
    'UW',
    'UW Student',
    'UW Math',
    'UW Math Student',
    'UWaterloo',
    'uwaterloo',
    'uw',
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
      href: '/favicon.ico',
      sizes: '48x48',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
