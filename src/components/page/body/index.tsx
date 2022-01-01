import React from 'react';
import { makeStyles } from '@material-ui/core';

type PageBodyProps = {
  className?: string;
  children?: JSX.Element | JSX.Element[] | any;
};

const useStyles = makeStyles((theme) => {
  return {
    pageRoot: {
      '& .page-body-container': {
        width: '100%',
        padding: theme.spacing(2),
      },
    },
  };
});

// https://v4.mui.com/styles/api/#withtheme-component-component

export const PageBody = (props: PageBodyProps) => {
  const classes = useStyles();

  return (
    <div className={`${classes.pageRoot} ${props.className}`}>
      <div className="page-body-container">{props.children}</div>
    </div>
  );
};
