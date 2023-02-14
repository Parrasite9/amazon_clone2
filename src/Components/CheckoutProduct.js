import React from 'react'
import '../CSS Files/CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, image, title, price, rating}) {

    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {
        // REMOVE ITEM FROM CART 
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
            
        })
    }

  return (
    <div className='checkoutProduct'>
      {/* PRODUCT IMAGE  */}
      <img className='checkoutProduct_image' src={image} />

      {/* PRODUCT INFO  */}
      <div className='checkoutProduct_info'>
        {/* PRODUCT TITLE */}
        <p className='checkoutProduct_title'>{title}</p>
        {/* PRODUCT PRICE  */}
        <p className='checkoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        {/* PRODUCT RATING  */}
        <div className='checkoutProduct_rating'>
            {Array(rating).fill().map((_, i) => (
                <p>⭐</p>
            ))}
        </div>

        {/* REMOVE PRODUCT BUTTON  */}
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
