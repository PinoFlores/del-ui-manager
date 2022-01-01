import React, { ReactNode } from 'react';
import { LanguangeContext } from './LangContext';

interface LanguageProviderProps {
  children?: ReactNode | ReactNode[];
}

export const LanguageProvider = (props: LanguageProviderProps) => {
  const [language, setLanguage] = React.useState('en');

  const changeLanguage = (langOptions = 'en') => {
    setLanguage(langOptions);
  };

  const values = React.useMemo(() => {
    return {
      language,
      changeLanguage,
    };
  }, [language]);

  return (
    <LanguangeContext.Provider value={values}>
      {props.children}
    </LanguangeContext.Provider>
  );
};
