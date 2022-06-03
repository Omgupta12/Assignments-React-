import React from 'react'
import "./todo.css"

const Task = ({checkbox,deletion,todos}) => {
    return (
        <div className='task'>
            {todos.map((item,index)=> {
               return <div className={item.done === true ? "itemchecked" : "item"} key={item.id} >
                    <input onChange={() => {checkbox(item) }} type="checkbox" className='checkbox'/>
                    {item.text}
                    <button className='delete' onClick={() => {deletion(index)}}>Delete</button>
               </div>
            })} 
        </div>
    )
}

export default Task