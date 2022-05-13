
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Bookstore = () => {

  const [books, setBooks] = useState([])

  const url = process.env.REACT_APP_BOOKSTORE_URL;

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log(response)
      if(response.status === 200){
        toast.success('Books loaded successfully')
        setBooks(response.data.data)
      }else{
        toast.error("No data found")
      }
    })
    .catch((err) => {
      if(err.response){
        toast.error('something went wrong')
      }
    } )


  }, [])

  console.log(books)
  

 
  
  return (
    <div className='bookstore'>
      <ToastContainer />
      {
        books ? books.map((book, idx )=> (
          <div key={idx} className='bookstore-card'>

            <div className='bookstore-card-image'>
              <img src={book.image} alt="icon" />
            </div>
  
            <div>
              <h5> {book.title} </h5>
              <p> {book.author}</p>
              <p> { book.genre} </p>
              <p> {book.published}</p>
            </div>
  
        </div>
  
        ) )
        : null
      }

      
     
     

    </div>
  )
}

export default Bookstore