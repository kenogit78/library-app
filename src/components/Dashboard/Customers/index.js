import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

const Customer = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
        .then(response => response.json())
        .then(data => setCustomers(data.data))
   
    }, [])
    
    console.log(customers)


  return (
    <div className="settings_members">
            <div className="settings_members-table">

             <div  className="settings_members-table-main">

                 <table>
                     <thead>
                         <tr>
                             <th> FULL NAME</th>
                             <th> EMAIL</th>
                             <th> PHONE NO</th>
                             <th> GENDER</th>
                         </tr>
                     </thead>

                     <tbody>

                         {
                             customers ? customers?.map((customer, idx) => (
                            <tr key={idx}>
                             <td> 
                                 <p>
                                     <span> {customer.firstname}</span>
                                     <span> {customer.lastname}</span>
                                 </p>
                                 
                                </td>
                             <td> {customer.email}</td>
                             <td> {customer.phone}</td>
                             <td> {customer.gender}</td>
                         </tr>
                             ) ) : null
                         }
                         
                     </tbody>
                 </table>
                        
             </div>
            </div>
    </div>
  )
}

export default Customer