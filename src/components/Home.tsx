import React, { useContext } from 'react';
import { EXTENSION_CSS_CLASSNAME } from '../enums';
import { TabContext } from '../context/tabContext';

export const Home = (): JSX.Element => {
  const tabContext = useContext(TabContext);
  const handleConnector = () => {
    // setTab(1);
    alert(tabContext);
  };

  return (
    <div className={EXTENSION_CSS_CLASSNAME}>
      <div className="container">
        <div className="small-container">
          <button>+</button>
          <span>Dataset</span>
        </div>
        <div className="small-container">
          <button onClick={handleConnector}>+</button>
          <span>Connectors</span>
        </div>
      </div>
    </div>
  );
};
