import React from 'react'
import styled from 'styled-components'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <div className='bg'></div>
      <div className='home'>
        <Products
          title='The Lean Startup'
          price={22}
          image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roguefour.co.uk%2Fwp-content%2Fuploads%2F2019%2F05%2FAHistoryOfPsychology2e_PB_3D.jpg&f=1&nofb=1https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roguefour.co.uk%2Fwp-content%2Fuploads%2F2019%2F05%2FAHistoryOfPsychology2e_PB_3D.jpg&f=1&nofb=1'
        />
      </div>
    </div>
  )
}

export default Home
