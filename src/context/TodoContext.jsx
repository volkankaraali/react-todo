import { createContext, useContext, useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";

const TodoContext = createContext();

export const TodoProvider = ({children})=>{

    const [todos, setTodos] = useState([])
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")))
    }, [])


    const deleteTodo=(id)=>{
        let changeStatus=todos.filter((item)=> {
            if (item.id===id) {
                return false;
            }else{
                return item
            }
        })
        localStorage.setItem('todos',JSON.stringify(changeStatus))
        setTodos(changeStatus)
    }

    const toOngoingTodo=(id)=>{
        let changeStatus=todos.map(item=>{
            if (item.id===id) {
                item.completed="ongoing"
                return item
            }
            else return item
        })
        localStorage.setItem('todos',JSON.stringify(changeStatus))
        setTodos(changeStatus)
    }

    const toActiveTodo=(id)=>{
        let changeStatus=todos.map(item=>{
            if (item.id===id) {
                item.completed="false"
                return item
            }
            else return item
        })
        localStorage.setItem('todos',JSON.stringify(changeStatus))
        setTodos(changeStatus)
    }

    const toCompleted=(id)=>{
        let changeStatus=todos.map(item=>{
            if (item.id===id) {
                item.completed="true"
                return item
            }
            else return item
        })
        localStorage.setItem('todos',JSON.stringify(changeStatus))
        setTodos(changeStatus)
    }

    
    

    const values={
        todos,
        setTodos,
        deleteTodo,
        toOngoingTodo,
        toActiveTodo,
        toCompleted,
    }
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo=()=> useContext(TodoContext);