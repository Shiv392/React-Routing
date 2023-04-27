import React from 'react';
import { Outlet ,useSearchParams} from 'react-router-dom';

function Users() {
    const [searchparams,setsearchparams]=useSearchParams();
    const activeUser=searchparams.get('filter')==='active'
  return (
   <>
    <div>
      <h1>User1</h1>
      <h1>User2</h1>
      <h1>User3</h1>

    </div>
    <div>
        <button onClick={()=>setsearchparams({filter:'active'})} className='btn btn-primary'>Active Users</button>
        <button onClick={()=>setsearchparams({})} className='btn btn-danger'>Reset Filter</button>
   {
    activeUser ? <h1>filter activated</h1> : <h1>not activated</h1>
   }
    </div>
    <Outlet></Outlet>
    
   </>
  )
}

export default Users
