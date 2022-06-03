import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./todos.css"

const Todos = () => {

    const [todo, setTodo] = useState([])
    const [newtodo, setNewTodo] = useState("")

    const saveinfo = () => {
        fetch("http://localhost:8080/todo", {
            method: "POST",
            headers: {
                "content-type": "application/JSON"
            },
            body: JSON.stringify({
                text: newtodo,
                done: false,
            })
        })
            .then((r) => r.json())
            .then((d) => {
                // setTodo([[...todo , d]])
                console.log(todo)
                fetchinfo()
                setNewTodo("")
            })
    }

    const fetchinfo = () => {
        fetch("http://localhost:8080/todo")
            .then((r) => r.json())
            .then((d) => {
                // console.log(d);
                setTodo(d)
            })
    }

    useEffect(() => {
        fetchinfo();
    }, [])
    return (
        <div className='maindiv'>
            <h1>Todo fetch </h1>
            <input value={newtodo} onChange={({ target }) => setNewTodo(target.value)} />
            <button onClick={saveinfo}>Add</button>
            {todo.map((todo) => {
                return <div key={todo.id}>{todo.text}</div>
            })}
        </div>
    )
}

export default Todos