import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'
import { BsFillXCircleFill,BsArrowRightShort} from "react-icons/bs";
function ActiveTodo() {

    const { todos, deleteTodo, toOngoingTodo } = useTodo();

    let active=todos?.filter(item=>{
        if (item.completed==="false") {
            return item
        }else return false
    })


    return (
        <div className="active" >
            <span>Active { active===undefined ? "(0)" : `(${active.length})`  } </span>
            {

                todos?.map((item, i) => {
                    if (item.completed === "false") {
                        return (
                            <div key={i} className="active-item">
                                <h2 className="txtTitle">{item.title}</h2>
                                <div className="btn-group">
                                    <button className="btnOngoing" onClick={() => toOngoingTodo(item.id)}><BsArrowRightShort className="next-icon"/></button>
                                    <button className="btnDelete"  onClick={() => deleteTodo(item.id)}><BsFillXCircleFill className="delete-icon"/></button>
                                </div>
                            </div>
                        )
                    } else {
                        return false;
                    }
                })
            }

        </div>
    )
}

export default ActiveTodo
