import React, { ReactNode } from 'react';
import { LanguangeContext } from './LanguangeContext';

interface LanguageProviderProps {
  children?: ReactNode | ReactNode[];
}

export const LanguageProvider = (props: LanguageProviderProps) => {
  const [language, setLanguage] = React.useState('es');

  return (
    <LanguangeContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguangeContext.Provider>
  );
};
