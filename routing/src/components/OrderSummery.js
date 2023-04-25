import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderSummery() {
    const navigate=useNavigate();
  return (
    <div>
        <button onClick={()=> navigate(-1)} className='btn btn-danger'>Go Back</button>
      <h1 className='text text-center text-primary'>Your Order Has Been Confirmed</h1>
    </div>
  )
}

export default OrderSummery
