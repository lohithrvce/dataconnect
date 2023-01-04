import React from 'react';
import { EXTENSION_CSS_CLASSNAME } from '../enums';


export const Home = (): JSX.Element => {
  return (
    <div className={EXTENSION_CSS_CLASSNAME}>

        <div className="container">
            <div className="small-container">
                <button>+</button>
                <span>Dataset</span>
            </div>
            <div className="small-container">
                <button>+</button>
                <span>Connectors</span>
            </div>
        </div>

      
    </div>
  );
};
