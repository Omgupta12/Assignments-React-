import React from 'react'
import "./todo.css"

const TodoList = ({deletion,todos}) => {
    return (
        <div className='list'>
           {todos.filter(item => {
               return item.done === true;
            }).map((item, index) => {
               return <div className="itemChecked">
                  <input checked type="checkbox" className="checkbox" />
                  {item.text}
                  <button className='delete' onClick={() => { deletion(index) }}>Delete</button>
               </div>
            })
         }
        </div>
    )
}

export default TodoList