import { createContext } from 'react';

export interface LanguangeContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguangeContext = createContext<LanguangeContextProps>({
  language: 'es',
  setLanguage: (lang) => {
    console.log('No Provider', lang);
  },
});
