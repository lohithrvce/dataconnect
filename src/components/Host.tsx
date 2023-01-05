import React, { useContext } from 'react';
import { AppComponent } from '../components/AppComponent';
import { ConnectorSelect } from '../components/ConnectorSelect';
import { Home } from '../components/Home';
import { TabContext } from '../context/tabContext';

export const Host = (): JSX.Element => {
  const tabContext = useContext(TabContext);

  switch (tabContext) {
    case 0:
      return <Home />;
    case 1:
      return <ConnectorSelect />;
    case 2:
      return <AppComponent />;
    default:
      return <Home />;
  }
};
