import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Product() {
    const navstyle={
        display:'flex',
        gap:'20px',
        justifycontent:'center',
        alignitems:'center',
          width:'100%'      
 
    }
  return (
    <>
    <div className='container'>
      <input className='form-control' type='search'  placeholder='Search Products'/>
    </div>
    <nav style={navstyle}>
   <Link to="featured">Featured</Link>
   <Link to="newproducts">New</Link>

    </nav>
    {/* to show child router */}
    <Outlet></Outlet>  
    </>
  )
}

export default Product
