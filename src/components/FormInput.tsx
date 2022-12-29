import React from 'react';

export const FormInput = (): JSX.Element => {
  return (
    <div style={{margin:'10px', padding:'20px'}}>
      <h2>ADD NEW CONNECTOR</h2>
      <form style={{display: 'flex', flexDirection:'column'}}>
        <label> Host: <input type="text" name="host" /> </label>
        <label> User: <input type="text" name="user" /> </label>
        <label> Password: <input type="text" name="password" /> </label>
        <label> Database: <input type="text" name="database" /> </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
