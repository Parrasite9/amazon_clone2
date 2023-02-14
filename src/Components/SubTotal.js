import { CardTravel } from '@mui/icons-material'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../CSS Files/SubTotal.css'
import { getCartTotal } from './Reducer'
import { useStateValue } from './StateProvider'

function SubTotal() {

  const [ {cart} , dispatch] = useStateValue()

  return (
    <div className='subTotal'>
      <CurrencyFormat renderText={(value) => (
        <>
            <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
            <small className='subTotal_gift'>
                <input type="checkbox"/>This order contains a gift
            </small>
        </>
      )}
      decimalScale={2}
      value={getCartTotal(cart)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
       />

       <button>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal
