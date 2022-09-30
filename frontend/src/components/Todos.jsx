import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

export const Todos = (props)=>{
    return (
      <div className='todos'>
          {props.todos.map(todo=>{
              return(
                  <div className="todo">
                      <button className="checkbox" style={{backgroundColor: todo.status ? "purple": "white"}}></button>
                      <p>{todo.name}</p>
                      <button><AiOutlineEdit size={20} color="#64697b"/></button>
                      <button><AiOutlineDelete size={20} color="#64697b"/></button>
                  </div>
              )
          })}
      </div>
    )
  }