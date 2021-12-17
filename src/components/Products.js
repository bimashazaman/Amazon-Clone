import { Info } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Products = ({ title, image, price }) => {
  return (
    <div>
      <RowOne>
        <p>{title}</p>
        <strong>{price}</strong>
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roguefour.co.uk%2Fwp-content%2Fuploads%2F2019%2F05%2FAHistoryOfPsychology2e_PB_3D.jpg&f=1&nofb=1https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roguefour.co.uk%2Fwp-content%2Fuploads%2F2019%2F05%2FAHistoryOfPsychology2e_PB_3D.jpg&f=1&nofb=1'></img>
        <button>Add to cart</button>
      </RowOne>
    </div>
  )
}

export default Products

const RowOne = styled.div`
  padding: 3rem;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  padding: 20px;
  z-index: 1;
  align-items: center;
  justify-content: flex-end;
  /* min-height: 400px; */
  min-width: 100px;
  flex-direction: column;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  img {
    width: 100%;
    object-fit: contain;
    max-height: 200px;
    margin-bottom: 15px;
  }

  button {
    background-color: #f0c14b;
    border-color: #a88734 #9c7e31 #846a29;
    border: 1px solid #a88734;
    border-radius: 5px;
    cursor: pointer;
  }

  p {
    height: 100%;
    margin-bottom: 0;
  }

  strong {
    display: block;
    justify-content: flex-end;

    font-weight: bold;
    margin-left: 10px;
  }
`
