import React from 'react';

export const FormInput = (): JSX.Element => {
  return (
    <div className="data-connector-form">
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
    </div>
  );
};
