import React from 'react'
import Navbar from '../components/Navbar'
import Book from "../assets/home/images.jpeg"
import { Link } from 'react-router-dom'

const Home = () => {
  // const [count, setCount] = useState(10)

 
  return (


    <div className='home'>
        
        <Navbar />

        <div className='home-content'>
            <div className='home-content-text'>
            <h1> Join the online library</h1>
            <p> Libraree is a platform where you get access to quality books online, 
                join a community of online readers, get the latest information on new books of interest.</p>

             <Link to="/signup"> <button> Get started for free</button> </Link> 

          </div>

          <div className='home-content-image'>
            <img src={Book} alt="icon" />
          </div>
          
          

        </div>


     </div>
  )
}

export default Home