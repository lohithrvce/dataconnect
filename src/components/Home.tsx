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

      {/* <div className="data-connector-form">
        <div className='Header'>ADD NEW CONNECTOR</div>
        <div className='SpanSelect'>
          <span>Please select the connector</span>
          <select>
            <option>Postgres</option>
            <option>MySql</option>
          </select>
        </div>
        <div className='SpanInput'>
          <span>Host: </span>
          <input />
        </div>
        <div className='SpanInput'>
          <span>Username: </span>
          <input />
        </div>
        <div className='SpanInput'>
          <span>Password: </span>
          <input />
        </div>
        <div className='SpanInput'>
          <span>Database: </span>
          <input />
        </div>
        <div className='SpanInput'>
          <span>Schema: </span>
          <input />
        </div>
      </div> */}
    </div>
  );
};
