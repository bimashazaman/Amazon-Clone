import React from 'react'
import styled from 'styled-components'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <div className='bg'></div>
      <div className='home'>
        <Products
          id='1'
          title='The Lean Startup'
          price={22}
          image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roguefour.co.uk%2Fwp-content%2Fuploads%2F2019%2F05%2FAHistoryOfPsychology2e_PB_3D.jpg&f=1&nofb=1https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roguefour.co.uk%2Fwp-content%2Fuploads%2F2019%2F05%2FAHistoryOfPsychology2e_PB_3D.jpg&f=1&nofb=1'
        />
        <Products
          id='49538094'
          title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
          price={239.0}
          image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
        />

        <Products
          id='4903850'
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
        <Products
          id='23445930'
          title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
          price={98.99}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
        />
        <Products
          id='3254354345'
          title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
          price={598.99}
          image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
        />

        <Products
          id='90829332'
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
        />
      </div>
    </div>
  )
}

export default Home
