import React from 'react'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
// import { useHistory } from 'react-router-dom'

function Subtotal() {
  //   const history = useHistory()

  const [{ basket }, dispatch] = useStateValue()

  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <SubTotalGift>
              <input type='checkbox' /> This order contains a gift
            </SubTotalGift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Button>
        <button>Proceed To Checkout</button>
      </Button>
    </Container>
  )
}

export default Subtotal

//container display left

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 300px;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f2f2f2;
  margin: 10px;
  margin-top: 30px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  border: 1px solid #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px;

    transform: translateY(-3px);
    transform: scale(1.01);
    transition: cubic-bezier(0.215, 0.61, 0.355, 1);
    cursor: pointer;
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
  }
`

const SubTotalGift = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`

const Button = styled.div`
  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    border: 1px solid;
    margin-top: 10px;
    color: #111;
    border-color: #a88734 #9c7e31 #846a29;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
    margin-bottom: 10px;
    font-size: 1rem;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`
