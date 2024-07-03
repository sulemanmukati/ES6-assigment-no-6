import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
 

import Nav from './Navbar'
import Header from './Header'
import Carousel from './Carousel'
import Container1 from './Container1.jsx'
import Container2 from './Container2.jsx'


const App = () => {
    return (
      <>
      <Header />
      <Nav />
      <Carousel />
      <Container1 />
      <Container2 />
      </>

  )
}

export default App


