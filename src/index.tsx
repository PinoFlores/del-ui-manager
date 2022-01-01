import React, { HTMLAttributes, ReactChild } from 'react';
import { PageBuilder } from './components/page/PageBuilder';
import Configs from './page.json';
import { useLanguage } from './hooks/useLanguage';
import { Wrapper } from './Wrapper';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing = () => {
  const { changeLanguage, language } = useLanguage();

  return (
    <Wrapper>
      {language}
      <button
        onClick={() => {
          changeLanguage('es');
        }}
      >
        espanol
      </button>
      <button
        onClick={() => {
          changeLanguage('en');
        }}
      >
        en
      </button>
      <button
        onClick={() => {
          changeLanguage('ca');
        }}
      >
        ca
      </button>
      <PageBuilder pageConfigs={Configs}></PageBuilder>
    </Wrapper>
  );
};
