import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SignIn from './SignIn'
import React, { useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

function App() {
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       console.log('User logged in: ', authUser)
  //     } else {
  //       console.log('User logged out')
  //     }
  //   })
  // }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
