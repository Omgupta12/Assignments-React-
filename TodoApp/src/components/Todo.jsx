import React , {useState} from 'react'
import TodoItems from './TodoItems'
import TodoList from './TodoList';
import "./Todo.css"



const Todo = () => {

const [todo,setTodo] = useState([]);

const additems = (data) =>{
    console.log(data)
    setTodo([...todo,data])
    console.log(todo);
}
    return (
        <div className='main_div'>
            <h1>Todo List App</h1>
            <TodoList todo={todo}/>
            <TodoItems additems={additems}/>
        </div>
    )
}

export default Todo