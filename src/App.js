import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

// ==========================
//    COMPONENT IMPORTS 
// ==========================

import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import { auth } from './Firebase/firebase'
import { useStateValue } from './Components/StateProvider'

// ==========================
//    MATERIAL UI ICONS
// ==========================

const App = () => {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // WILL ONLY RUN ONCE WHEN THE APP COMPONENT LOADS 
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS: ', authUser);

      if (authUser) {
        // THE USER JUST LOGGED IN / THE USER WAS LOGGED IN 
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        // THE USER IS LOGGED OUT 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/' element={<Home />} />

      </Routes>

    </>
  )
}

export default App