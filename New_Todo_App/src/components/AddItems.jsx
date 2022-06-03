import React from 'react'
import { useState } from 'react'

const AddItems = ({addItem}) => {
    const [newtask , setNewtask] = useState("")
    return (
        <div className='searchbox'>
            <input onChange={(e) => {
                setNewtask(e.target.value)
            }} 
            className='input' type="text" placeholder='Add a to-do...'/>
            <button className='button' onClick={()=>addItem(newtask)}>Add</button>
        </div>
    )
}

export default AddItems