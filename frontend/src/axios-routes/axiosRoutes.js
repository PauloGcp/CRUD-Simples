import axios from "axios";

export async function getTodos(){
    const resp = await axios.get("http://localhost:3002/todos")
    return resp
}

export async function postTodo(todo){
    const res = await axios.post("http://localhost:3002/todos", todo)
    .then(resp=>{
        getTodos()
    })
    
}
