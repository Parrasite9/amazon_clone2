import React from 'react'
import '../CSS Files/Checkout.css'
import { useStateValue } from './StateProvider'

import SubTotal from './SubTotal.js'
import CheckoutProduct from './CheckoutProduct.js'
import Header from './Header'

function Checkout() {

  const [{ cart, user }, dispatch] = useStateValue()

  return (

    <>
    <Header />

      <div className='checkout'>
          <div className='checkout_left'>
              <img className='checkout_ad' src='https://i.imgur.com/mryRfK4.jpg' alt=''/>

              <div>
                  {/* EMAIL IS NOT BEING DISPLAYED FOR SOME REASON  */}
                  <h3>{user?.email}</h3>
                  <h2 className='checkout_title'>Your Shopping Cart</h2>

                  {cart.map(item => (
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                  ))}
                  {/* CHECKOUT PRODUCT  */}

                  {/* CHECKOUT PRODUCT  */}

                  {/* CHECKOUT PRODUCT  */}

                  {/* CHECKOUT PRODUCT  */}

                  {/* CHECKOUT PRODUCT  */}

                  {/* CHECKOUT PRODUCT  */}

              </div>
          </div>

          <div className='checkout_right'>
              <SubTotal />


          </div>
      </div>
    </>
  )
}

export default Checkout
