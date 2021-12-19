import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
