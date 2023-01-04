import React from 'react';


export const SidePanel = (): JSX.Element => {
  return (
    <div className='jl-ReactAppWidget'>
      <h2>List of availaible connections</h2>
      <div>
        <ul>
            <li>Finance Dev Database</li>
            <li>Finance Prod Database</li>
            <li>Atom Dev Database</li>
            <li>Atom Dev Database</li>
        </ul>
      </div>
    </div>
  );
};
