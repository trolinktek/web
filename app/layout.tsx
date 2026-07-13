import type { Metadata } from 'next';
import './globals.css';
import './mobile-fixes.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trolinktek.com'),
  title: 'TrolinkTek',
  description: 'CarPlay adapter manufacturer and OEM/ODM supplier.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
