import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
<div className='navbar-header'>
            <h1> Libraree </h1>


<ul className='ul-light'>
{/* <ul className={ toggle === false ? 'ul-light' : 'ul-dark'}> */}
                <li>  Overview  </li>
                <li>  About Us  </li>
                <li> Our Product  </li>
                <li>  Contact Us  </li>
            </ul>
    </div>

    <div className='navbar-signins'>
        <p> Sign in</p>
        <Link to='/signup' > <button> Sign Up </button> </Link>  
    </div>
    </div>
  )
}

export default Navbar