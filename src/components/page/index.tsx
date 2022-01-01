import React, { FunctionComponent, ReactNode } from 'react';

import { PageHeader } from './header';
import { Button } from '@material-ui/core';

type PageProps = {
  className?: string;
  style?: React.CSSProperties;
  title?: ReactNode | string;
  children?: ReactNode | ReactNode[];
};

const BasePage: FunctionComponent<PageProps> = (props: PageProps) => {
  return (
    <>
      <PageHeader
        title="Page Header"
        actions={
          <>
            <Button>Send</Button>
            <Button>Send</Button>
          </>
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, deleniti
        alias est corrupti molestias temporibus. Modi sed doloremque nam quod
        maiores quasi laboriosam commodi odit, nihil assumenda est totam neque.
      </PageHeader>
      {props.children}
    </>
  );
};

export default BasePage;
