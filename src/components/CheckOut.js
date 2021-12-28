import React from 'react'
import styled from 'styled-components'
import SubTotal from './SubTotal'

const CheckOut = () => {
  return (
    <Container>
      <Wrap>
        <CheckOutLeft>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg '
            alt=''
          />

          <SubTotal />
        </CheckOutLeft>

        <CheckOutTitle>
          <h2>Your Busket</h2>
        </CheckOutTitle>
      </Wrap>
    </Container>
  )
}

export default CheckOut

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
`

const CheckOutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  margin-right: 10px;

  img {
    width: 50%;
    max-height: 200px;
    margin-right: 10px;
    padding: 10px;
  }
`

const CheckOutTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0;
    padding: 10px;
    border-bottom: 1px solid black;
  }
`

// const CheckOutRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
// `

const Wrap = styled.div``

// const CheckOutRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
// `
