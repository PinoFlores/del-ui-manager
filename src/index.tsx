import React, { HTMLAttributes, ReactChild } from 'react';
import { PageBuilder } from './components/page/PageBuilder';
import { Wrapper } from './Wrapper';
import Configs from './page.json';
import { useLanguage } from './hooks/useLanguage';
import { Button } from '@material-ui/core';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const Main = () => {
  const { setLanguage, language } = useLanguage();

  return (
    <>
      {language}
      <>
        <Button
          disableElevation
          style={{ marginRight: '1rem' }}
          color="primary"
          variant="contained"
          onClick={() => {
            console.log('aaaaaaaaaaaaa');
            setLanguage('es');
          }}
        >
          espanol
        </Button>
        <Button
          style={{ marginRight: '1rem' }}
          color="primary"
          variant="contained"
          onClick={() => {
            setLanguage('en');
          }}
        >
          en
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setLanguage('ca');
          }}
        >
          ca
        </Button>
        <PageBuilder pageConfigs={Configs} />
      </>
    </>
  );
};

export const Thing = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
};
