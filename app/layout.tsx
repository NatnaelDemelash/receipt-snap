import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ReceiptSnap - Turn receipts into data',
  description:
    'Stop typing, start snapping. Turn paper receipts into clean CSV in seconds.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="py-6 text-center text-[10px] text-gray-400 border-t border-gray-200 uppercase tracking-wide">
          <p>© 2026 RECEIPTSNAP — STOP TYPING, START SNAPPING.</p>
        </footer>
      </body>
    </html>
  );
}
