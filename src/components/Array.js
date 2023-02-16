import React, { useState } from 'react'

function Array() {

    const fruits=["Apple","Banana","Onion"]
    const [newItem,setNewItem]=useState([fruits])
  return (
    <>
    <div>
        <ul>
            {newItem.map((item,index)=>{
               return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
    
    </>
  )
}

export default Array