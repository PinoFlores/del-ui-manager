import React from 'react';

import BasePage from '.';
import { PageHeader } from './header';
import { Button } from '@material-ui/core';

import { useLanguage } from './../../hooks/useLanguage';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { MultiLanguageLabel, PageConfigs, HeaderAction } from './types.d';
interface PageBuilderProps {
  pageConfigs: PageConfigs;
}

type LabelExtractorProps = {
  options: MultiLanguageLabel;
};

const ExtractLabel = React.memo(({ options }: LabelExtractorProps) => {
  const { language } = useLanguage();
  return <>{options[language as keyof MultiLanguageLabel]}</>;
});

type ActionsBuilderProps = {
  actions: HeaderAction[] | undefined;
};

const ActionsBuilder = React.memo(({ actions }: ActionsBuilderProps) => {
  let history = useHistory();
  let { url } = useRouteMatch();

  const fixPath = (val = ''): string => {
    return val.replace('{CURRENT_PATH}', url === '/' ? '' : url);
  };

  return (
    <>
      {actions?.map((action, index) => {
        const { title, type, path } = action;
        return (
          <Button
            key={index}
            color="primary"
            variant="contained"
            onClick={() => {
              if (type === 'redirect') {
                history.push(fixPath(path));
              }
            }}
          >
            <ExtractLabel options={title} />
          </Button>
        );
      })}
    </>
  );
});

export const PageBuilder = (props: PageBuilderProps) => {
  const { pageConfigs } = props;

  let header = undefined;

  if ('header' in pageConfigs) {
    const { title, actions } = pageConfigs.header;
    const actionsItems = <ActionsBuilder actions={actions} />;
    header = (
      <PageHeader
        actions={actionsItems}
        title={<ExtractLabel options={title} />}
      />
    );
  }

  return (
    <BasePage header={header}>
      <p>ddddd</p>
      <p>dddddddddddd</p>
    </BasePage>
  );
};
