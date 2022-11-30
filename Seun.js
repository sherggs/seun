import React, { useEffect, useState } from 'react'

const Seun = () => {

    const [Seun, setSeun] = useState([])

    async function LoadSeun(){
        const request = await fetch("https://Localhost:3000")
        const response = await request.json()
        setSeun(response.google)
    }

    useEffect(() => {
        LoadSeun() 
    }, [])
    
  return (

<>
{Seun.map( e => (
    <div key={e.id} />
   ))}
   )
  
</>
  
}

export default Seun