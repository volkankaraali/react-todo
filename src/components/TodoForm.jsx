import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useTodo } from '../context/TodoContext'
function TodoForm() {

    const {setTodos}=useTodo();
    const [input, setInput] = useState("")

    const onChange=(e)=>{
        setInput(e.target.value)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        if (input==="") {
            return false
        }
        else{
            let todosOnStorage=JSON.parse(localStorage.getItem('todos'))
            console.log("todos bef: "+todosOnStorage);
            if (todosOnStorage==null) todosOnStorage=[];
            let todo={
                id:nanoid(),
                title:input,
                completed:"false"
            }
            
            todosOnStorage.push(todo)
            console.log(todosOnStorage);
            localStorage.setItem('todos',JSON.stringify(todosOnStorage))
            setTodos(JSON.parse(localStorage.getItem("todos")))
            setInput("")
        }

        
    }


    return (
        <div className="todoForm container">
            <form onSubmit={handleSubmit}>
                <input placeholder="Add Todo!" value={input} onChange={onChange}/>
                <button className="btn-form">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
