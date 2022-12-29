import React from 'react';
import { EXTENSION_CSS_CLASSNAME } from '../enums';

export const AppComponent = (): JSX.Element => {
  return (
    <div className={EXTENSION_CSS_CLASSNAME}>
      <div className="data-connector-form">
        <div>ADD NEW CONNECTOR</div>
        <div>
          <span>Please select the connector</span>
          <select>
            <option>Postgres</option>
            <option>MySql</option>
          </select>
        </div>
        <div>
          <span>Host: </span>
          <input />
        </div>
        <div>
          <span>Username: </span>
          <input />
        </div>
        <div>
          <span>Password: </span>
          <input />
        </div>
        <div>
          <span>Database: </span>
          <input />
        </div>
      </div>
    </div>
  );
};
