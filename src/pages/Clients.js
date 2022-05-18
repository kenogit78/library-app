import React, { useEffect, useState } from 'react';




function Clients() {
    const [clients, setClients] = useState([])

    const url = 'https://fakerapi.it/api/v1/persons?_quantity=5';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setClients(data.data))
   
    }, [])
    
    console.log(clients)


  return (
        <div className="client">
           <div className="client-table">

<div  className="client-table-main">

    <table>
        <thead>
            <tr>
                <th> IMAGE</th>
                <th> FULL NAME</th>
                <th> EMAIL</th>
                <th> PHONE NO</th>
                <th> GENDER</th> 
           </tr>
        </thead>

        <tbody>

            {
                clients ? clients?.map((client, id) => (
                <tr key={id}>

                  
                <td><img src={client.image} width='100px' height='100px' alt="icon" /></td>  
               
                <td>{client.lastname} {client.firstname}</td>
                <td> {client.email}</td>
                <td> {client.phone}</td>
                <td> {client.gender}</td>
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




export default Clients