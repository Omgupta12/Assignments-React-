import React, {useState} from 'react'
import AddItems from './AddItems'
import Task from './Task';
import TodoList from './TodoList';
import "./todo.css"

const Todo = (props) => {

    const [todos, setTodos] = useState([]);
    // const addTask =(task)=>{
    //     var newTask={
    //       "id":data.length+1,
    //       "text":task,
    //       "done": false,
    //       "count": 1
    //     }
    // setTodo([...todo,newTask])
    const [doneTodos, setDoneTodos] = useState(false);

    const addItem = (data) => {
        // console.log(data);
        var newTask={
                  "id": todos.length+1,
                  "text": data,
                  "done": false,
                }
        setTodos([...todos, newTask]);
        // console.log(todos)
    }

    const deletion = (position) => {
        todos.splice(position,1)
        setTodos([...todos])
    }

    const checkbox = (item) => {
        // console.log(item);
        item.done = !item.done;
        // console.log(item);
        setTodos([...todos])
    }
    return (
        <div className='todo'>
            <AddItems addItem={addItem} />
            <Task checkbox={checkbox} deletion={deletion} todos={todos}/>
            <div >
               <button className='btn2' onClick={() => { setDoneTodos(!doneTodos) }}>Show Completed To-Dos</button>
               {doneTodos ? <TodoList deletion={deletion} todos={todos} /> : null}
            </div>
        </div>
    )
}

export default Todo