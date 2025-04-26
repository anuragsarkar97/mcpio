import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'MCP Registry',
  description: 'Model context protocol server registry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Header />
        <div>
          <div className={'flex-1 pt-16'}>
            <div className={'min-h-screen bg-white'}>
              <div className={'container mx-auto py-6 px-6'}>
                <div className={'flex flex-col gap-4 max-w-5xl mx-auto'}>{children}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID || ''} />
    </html>
  );
}
