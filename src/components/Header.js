import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <Logo>
          <img
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt=''
          />
        </Logo>
      </Link>
      <SearchBox>
        <input type='text' placeholder='Search' />
      </SearchBox>
      <SearchIcon className='serachIcon' />
      <Signin>
        <span>
          Hello,
          <br></br>
          <a href='#'>Sign in</a>
        </span>
      </Signin>
      <Orders>
        <span>
          Returns
          <br></br>
        </span>
        <a>&Orders</a>
      </Orders>
      <Primes>
        <span>
          Your
          <br></br>
          <a href='#'>Prime</a>
        </span>
      </Primes>
      <Cart>
        <Link to='/checkout'>
          <ShoppingBasketIcon className='shopping' />
        </Link>
      </Cart>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  background-color: #131921;
  display: flex;
  position: sticky;
  justify-content: space-evenly;
  z-index: 100;
  align-items: center;
`
const Logo = styled.div`
  width: 100px;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  padding-top: 5px;
  object-fit: contain;
  margin-right: 20px;

  img {
    width: 100%;
  }
`

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  border-radius: 25px;
  flex: 1;

  input {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
    outline: none;
    font-size: 14px;
  }
`

const Signin = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;

  a {
    color: #fff;
    font-size: 12px;
    text-decoration: none;
    font-weight: 800;
  }

  span {
    color: #fff;
    font-size: 13px;
    text-decoration: none;
  }
`

const Orders = styled(Signin)``

const Primes = styled(Signin)``

const Cart = styled(Signin)``
