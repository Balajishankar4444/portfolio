import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Balaji Shankar — Software Test Engineer & Builder',
  description: 'Portfolio of Balaji Shankar — Software Test Engineer, Test Automation Engineer and independent product builder.',
  keywords: ['Balaji Shankar','Software Test Engineer','Test Automation','Python','Selenium','Appium','ADAS','Mercedes-Benz','portfolio'],
  authors: [{ name: 'Balaji Shankar' }],
  openGraph: { title: 'Balaji Shankar — Software Test Engineer & Builder', description: 'Engineering, testing, automation and products built from scratch.' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
