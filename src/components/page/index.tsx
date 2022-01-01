import React, { ReactNode } from 'react';

import { PageBody } from './body';

type PageProps = {
  className?: string;
  style?: React.CSSProperties;
  header?: ReactNode | undefined;
  children?: ReactNode | ReactNode[] | any;
};

const BasePage = (props: PageProps) => {
  return (
    <>
      {props.header}
      <PageBody>{props.children}</PageBody>
    </>
  );
};

export default BasePage;
