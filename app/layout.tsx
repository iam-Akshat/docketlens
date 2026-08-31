import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DocketLens — Public Comment Intelligence',
  description:
    'Explore real federal rulemaking dockets with an auditable human-and-agent research workspace powered by WebMCP.',
  openGraph: {
    title: 'DocketLens — Public Comment Intelligence',
    description:
      'Research real federal public comments with a shared, source-linked workspace for people and their agents.',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/iam-Akshat/docketlens/main/public/og.png',
        width: 1200,
        height: 630,
        alt: 'DocketLens — Public comment intelligence, built for people and their agents.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocketLens — Public Comment Intelligence',
    description:
      'Research real federal public comments with a shared, source-linked workspace for people and their agents.',
    images: [
      'https://raw.githubusercontent.com/iam-Akshat/docketlens/main/public/og.png',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
