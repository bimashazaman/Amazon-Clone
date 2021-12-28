import React from 'react'
import styled from 'styled-components'

function SignIn() {
  return (
    <Login>
      <Container>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type='text' placeholder='Email' />
          <h5>Password</h5>
          <input type='password' placeholder='Password' />
          <button>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Register>Create your Amazon Account</Register>
      </Container>
    </Login>
  )
}

export default SignIn

const Container = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
  margin: auto;
  background-color: #fff;

  p {
    margin-top: 15px;
    font-size: 10px;
  }

  img {
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  h5 {
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;

    &:hover {
        background: #f0c14b;
        border-color: #9c7e31 #846a29 #7d662a;
        cursor: pointer;
    }
`

const Login = styled.div`
  align-items: center;
  display: flex;
  padding: 20px;
  justify-content: center;
`

const Register = styled.div`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: gray;
  text-align: center;
  font-size: 12px;
  padding: 5px;
  background: #d3d3d3;
  font-weight: bold;

  &:hover {
    background: #c3c3c3;
    cursor: pointer;
  }
`
