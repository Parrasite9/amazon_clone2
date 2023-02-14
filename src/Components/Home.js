import React from 'react'
import '../CSS Files/Home.css'
import Product from './Product'

import Header from './Header'

function Home() {
  return (
    <>
      <Header />
      
      <div className='home'>
        <div className='home_container'>
          <img className='home_img' src='https://i.imgur.com/HHNobhU.jpg' alt='' />

          <div className='home_row'>
              <Product  title='Hire me: How to Find, Prepare for, Get the Interview and Get Hired Now!' price={19.99} image='https://i.imgur.com/NYatskf.jpg' rating={5} />
              <Product  title='KINGSFORD Heavy Duty Deluxe Charcoal Chimney Starter | BBQ Chimney Starter for Charcoal Grill and Barbecues, Compact Easy to Use Chimney Starters and BBQ Grill Tools' price={13.99} image='https://i.imgur.com/mjrvV2N.jpg' rating={4} />
          </div>

          <div className='home_row'>
              <Product  title='LG 50-Inch Class UQ9000 Series Alexa Built-in 4K Smart TV (3840 x 2160), 60Hz Refresh Rate, AI-Powered, Cloud Gaming (50UQ9000PUD, 2022)' price={426.99} image='https://i.imgur.com/4cDsehD.jpg' rating={5} />
              <Product  title='Panasonic LUMIX GH5 4K Mirrorless Camera with Lecia VARIO-Elmarit 12-60mm F2.8-4.0 Lens (DC-GH5LK)' price={1797.99} image='https://i.imgur.com/ohZZfnd.jpg' rating={5} />
              <Product  title='Shark AV911S EZ Robot Vacuum with Self-Empty Base, Bagless, Row-by-Row Cleaning, Perfect for Pet Hair, Compatible with Alexa, Wi-Fi, Gray' price={299.99} image='https://i.imgur.com/bKqz9f1.jpg' rating={5} />
          </div>

          <div className='home_row'>
              <Product  title='Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black' price={348.99} image='https://i.imgur.com/a4AC7zY.jpg' rating={5} />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home

