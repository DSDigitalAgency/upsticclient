'use client';

import CandidateLayout from '@/components/layout/CandidateLayout';

interface CandidateRootLayoutProps {
  children: React.ReactNode;
}

export default function CandidateRootLayout({ children }: CandidateRootLayoutProps) {
  return <CandidateLayout>{children}</CandidateLayout>;
} 