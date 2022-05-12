import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Bookstore = () => {

  const [books, setBooks] = useState([])

  const url = 'https://fakerapi.it/api/v1/books?_quantity=10';

  useEffect(() => {
    axios.get(url)
    .then(response => setBooks(response.data.data) )
  }, [])

  console.log(books)
  

 
  
  return (
    <div className='bookstore'>

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