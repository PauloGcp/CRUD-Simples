import axios from "axios";

export async function getTodos(){
    const resp = await axios.get("http://localhost:3002/todos")
    return resp
}

export async function postTodo(todo){
    await axios.post("http://localhost:3002/todos", {name:todo})
}

export async function deleteTodo(id){
    await axios.delete(`http://localhost:3002/todos/${id}`)
}