import React from 'react';
import { ReactWidget } from '@jupyterlab/apputils';
import { Host } from '../components/Host';
// import { EXTENSION_CSS_CLASSNAME } from '../enums';
import { TabContext } from '../context/tabContext';




export class ReactAppWidget extends ReactWidget {
  constructor() {
    super()
    this.addClass('jl-ReactAppWidget')
  }

  render(): JSX.Element {
    return (
      <TabContext.Provider value={1}>
        <Host />
      </TabContext.Provider>
    );
  }
}
