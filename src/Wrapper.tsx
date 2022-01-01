import React, { ReactNode } from 'react';
import { LanguageProvider } from './contexts/Provider';

interface ContainerProps {
  children?: ReactNode | ReactNode[];
}

export const Wrapper = ({ children }: ContainerProps) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
