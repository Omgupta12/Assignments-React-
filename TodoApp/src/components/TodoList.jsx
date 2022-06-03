import React,{useState} from 'react'

const TodoList = ({todo}) => {
    // console.log(todo)
    return (
        <div>
            {
               todo.map(e => {
                  return <div className='item' key={e}>➣ {e}</div>
               })
            }  
        </div>
    )
}

export default TodoList

