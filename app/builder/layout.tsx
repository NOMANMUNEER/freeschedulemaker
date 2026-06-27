import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatic Schedule Generator Online | Free Builder',
  description: 'Start building immediately with our free automatic schedule generator online. Add events, customize colors, and export in one click.',
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
