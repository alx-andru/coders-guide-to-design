// components/PrinciplePageLayout.tsx
import React from 'react';

type Props = { children: React.ReactNode };

const PrinciplePageLayout = ({ children }: Props) => {
  return <div className="principle-page container mx-auto py-4">{/* Placeholder for principle-specific layout */} {children}</div>;
};

export default PrinciplePageLayout;
