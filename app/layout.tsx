import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swabri Kanenje — Python Developer & ML Engineer',
  description: 'Portfolio of Swabri Kanenje — Python Developer specialising in AI, machine learning, RAG pipelines, and backend systems.',
  openGraph: {
    title: 'Swabri Kanenje — Python Developer & ML Engineer',
    description: 'Portfolio of Swabri Kanenje — Python Developer specialising in AI, machine learning, RAG pipelines, and backend systems.',
    url: 'https://folio.work.gd/',
    type: 'website',
    images: [
      {
        url: '/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Swabri Kanenje Portfolio',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/portfolio-svgrepo-com.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}