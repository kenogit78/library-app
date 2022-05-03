import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  const [count, setCount] = useState(10)

 
  return (


    <div>
        
        <Navbar />

        <h1> {count} </h1>


     </div>
  )
}

export default Home