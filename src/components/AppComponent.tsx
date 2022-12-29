import React from 'react';
import { EXTENSION_CSS_CLASSNAME } from '../enums';
import { FormInput } from './FormInput';

export const AppComponent = (): JSX.Element => {
  return (
    <div className={EXTENSION_CSS_CLASSNAME}>
      <FormInput/>
    </div>
  );
};
