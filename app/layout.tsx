import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swabri Musa - Full Stack Developer',
  description: 'Full Stack Developer specializing in Go, JavaScript, Python, and modern web frameworks',
  openGraph: {
    title: 'Swabri Musa - Full Stack Developer',
    description: 'Full Stack Developer specializing in Go, JavaScript, Python, and modern web frameworks',
    url: 'https://folio.work.gd/',
    type: 'website',
    images: [
      {
        url: '/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Swabri Musa Portfolio Preview',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/portfolio-svgrepo-com.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>
        {children}
      </body>
    </html>
  );
}