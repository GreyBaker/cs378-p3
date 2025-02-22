import React from 'react';


function OrderSummary ({totalSum, reset, order}) {


  return (
    <div className='row' id="order-block">
      <div className='col-6'>
        Subtotal ${totalSum.toFixed(2)}
      </div>
      <div className='col-2'>
        <button type="button" className="btn" id='summary-button' onClick={order}><b>Order</b></button>
      </div>
      <div className='col-2'>
        <button type="button" className="btn" id='summary-button' onClick={reset}><b>Clear All</b></button>
      </div>
    </div>
  )
};





export default OrderSummary;