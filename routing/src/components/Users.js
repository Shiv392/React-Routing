import React from 'react';
import { Outlet } from 'react-router-dom';

function Users() {
  return (
   <>
    <div>
      <h1>User1</h1>
      <h1>User2</h1>
      <h1>User3</h1>

    </div>
    <Outlet></Outlet>
   </>
  )
}

export default Users
