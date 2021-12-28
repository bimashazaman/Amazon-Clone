// import React from 'react'
// import styled from 'styled-components'
// import SubTotal from './SubTotal'
// import { useStateValue } from '../StateProvider'
// import CheckOutProduct from './CheckOutProduct'

// function CheckOut() {
//   const [{ basket }, dispatch] = useStateValue()

//   return (
//     <Container>
//       <Wrap>
//         <CheckOutLeft>
//           <SubTotal />
//         </CheckOutLeft>
//         <CheckOutTitle>
//           <h2>Your Busket</h2>
//           {basket.map((item) => (
//             <CheckOutProduct
//               id={item.id}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//             />
//           ))}
//         </CheckOutTitle>
//       </Wrap>
//     </Container>
//   )
// }

// export default CheckOut

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: max-content;
// `

// const CheckOutLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   margin-bottom: 10px;
//   margin-right: 10px;

//   img {
//     width: 80%;
//     max-height: 200px;
//     margin-right: 10px;
//     padding: 10px;
//   }
// `

// const CheckOutTitle = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   margin-bottom: 10px;

//   h2 {
//     font-size: 1.5rem;
//     font-weight: bold;
//     margin-bottom: 0;
//     padding: 10px;
//     border-bottom: 1px solid black;
//   }
// `

// const Wrap = styled.div``

import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import { useStateValue } from '../StateProvider'
import CheckOutProduct from './CheckOutProduct'

function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <SubTotal />
      </div>
    </div>
  )
}

export default CheckOut
