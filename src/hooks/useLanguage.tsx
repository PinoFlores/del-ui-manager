import React from 'react';
import { LanguangeContext } from '../contexts/LanguangeContext';

export const useLanguage = () => React.useContext(LanguangeContext);
