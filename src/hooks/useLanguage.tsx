import React from 'react';
import { LanguangeContext } from './../contexts/LangContext';

export const useLanguage = () => {
  const context = React.useContext(LanguangeContext);
  console.log(context);

  if (!context) throw new Error('x');
  return context;
};
