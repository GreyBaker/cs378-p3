import React from 'react';


function OrderSummary ({totalSum, reset, order}) {


  return (
    <div className='row'>
      <div className='col'>
        Subtotal ${totalSum.toFixed(2)}
      </div>
      <div className='col'>
        <button type="button" className="btn" id='add-button' onClick={order}><b>Order</b></button>
      </div>
      <div className='col'>
        <button type="button" className="btn" id='add-button' onClick={reset}><b>Clear All</b></button>
      </div>
    </div>
  )
};





export default OrderSummary;