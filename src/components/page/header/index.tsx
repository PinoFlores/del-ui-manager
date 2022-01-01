import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

type PageHeaderProps = {
  title?: JSX.Element | string;
  actions?: JSX.Element;
  children?: JSX.Element | JSX.Element[] | any;
};

const useStyles = makeStyles((theme) => {
  return {
    pageRoot: {
      '& .page-header-container': {
        width: '100%',
        padding: '1rem',
        background: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        '& > .top': {
          display: 'flex',
          justifyContent: 'space-between',
          '& .title': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
          },
        },
      },
    },
  };
});

// https://v4.mui.com/styles/api/#withtheme-component-component

export const PageHeader = (props: PageHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.pageRoot}>
      <div className="page-header-container">
        <div className="top">
          <div className="title">
            <Typography variant="h5">{props.title}</Typography>
          </div>
          <div className="actions">
            <Typography variant="h5">{props.actions}</Typography>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};
