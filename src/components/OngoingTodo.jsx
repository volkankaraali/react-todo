import React from 'react'
import { useTodo } from '../context/TodoContext';
import { BsCheckCircleFill,BsFillXCircleFill,BsArrowLeftShort} from "react-icons/bs";
function OngoingTodo() {
    const { todos, deleteTodo, toActiveTodo, toCompleted } = useTodo();


    let ongoing=todos.filter(item=>{
        if (item.completed==="ongoing") {
            return item
        }else return false
    })

    return (
        <div className="ongoing">
            <span>OnGoing ({ongoing.length})</span>
            {
                todos?.map((item, i) => {
                    if (item.completed === "ongoing") {
                        return (
                            <div key={i} className="ongoing-item">
                                <h2 className="txtTitle">{item.title}</h2>
                                <div className="btn-group">

                                <button className="btnActive" onClick={() => toActiveTodo(item.id)}><BsArrowLeftShort className="before-icon"/></button>
                                <button className="btnComplete" onClick={() => toCompleted(item.id)}><BsCheckCircleFill  className="complete-icon"/></button>
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

export default OngoingTodo
