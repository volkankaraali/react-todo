import React from 'react'
import { useTodo } from '../context/TodoContext';
import { BsFillXCircleFill,BsArrowLeftShort} from "react-icons/bs";
function CompletedTodo() {
    const { todos, toOngoingTodo, deleteTodo } = useTodo();

    let completed=todos?.filter(item=>{
        if (item.completed==="true") {
            return item
        }else return false
    })
    return (
        <div className="completed">
            <span>Completed { completed===undefined ? "(0)" : `(${completed.length})`  }</span>
            {
                todos?.map((item, i) => {
                    if (item.completed === "true") {
                        return (
                            <div key={i} className="completed-item">
                                <h2 className="txtTitle" >{item.title}</h2>
                                <div className="btn-group">
                                    <button className="btnOngoing" onClick={() => toOngoingTodo(item.id)}><BsArrowLeftShort className="before-icon"/></button>
                                    <button className="btnDelete" onClick={() => deleteTodo(item.id)}><BsFillXCircleFill className="delete-icon"/></button>
                                </div>
                            </div>)
                    } else {
                        return false;
                    }
                })
            }
        </div>
    )
}

export default CompletedTodo
