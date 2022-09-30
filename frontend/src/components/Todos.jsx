import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { deleteTodo } from "../axios-routes/axiosRoutes";

export const Todos = (props)=>{

    const deleteTodoAsync = async(id) =>{
        await deleteTodo(id)
    }

    return (
      <div className='todos'>
          {props.todos.map(todo=>{
              return(
                  <div className="todo">
                      <button className="checkbox" style={{backgroundColor: todo.status ? "purple": "white"}}></button>
                      <p>{todo.name}</p>
                      <p>{todo.id}</p>
                      <button><AiOutlineEdit size={20} color="#64697b"/></button>
                      <button onClick={()=>deleteTodoAsync(todo.id)}><AiOutlineDelete size={20} color="#64697b" /></button>
                  </div>
              )
          })}
      </div>
    )
  }