import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SignIn from './components/SignIn'

function App() {
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
