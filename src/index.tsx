import BasePage from './components/page';
import React, { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing = ({ children }: Props) => {
  return (
    <div>
      <BasePage title="sss">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        quaerat esse sapiente corporis, ducimus architecto alias modi expedita
        eaque eius inventore minus aliquid animi sint quasi praesentium nam.
        Quos, nam!
      </BasePage>
      {children}
    </div>
  );
};
