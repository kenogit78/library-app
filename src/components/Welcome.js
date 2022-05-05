import React from 'react'

const Welcome = () => {

    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))

  return (
    <div className='welcome'>
        <h3> Welcome to Libraree, {userDetails.name} </h3>
        <p> You're from {userDetails.country} </p>

    </div>
  )
}

export default Welcome