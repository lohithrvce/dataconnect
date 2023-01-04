import React, { useContext } from 'react';
import { TabContext } from '../context/tabContext';
const EXTENSION_CSS_CLASSNAME = 'jl-ReactAppWidget';

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
