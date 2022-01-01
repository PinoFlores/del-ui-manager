import { createContext } from 'react';

export interface LanguangeContextProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LanguangeContext = createContext<LanguangeContextProps>(
  {} as LanguangeContextProps
);
