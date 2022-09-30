import React, { useState, useEffect } from 'react';
import './styleApp/App.css';
import { Todos } from '../components/Todos';
import { getTodos, postTodo } from "../axios-routes/axiosRoutes"

function App() {

  const [todos, setTodos] = useState([])
  const [inputVisible, setInputVisible] = useState(true)
  const [name, setName] = useState("")

  const handleButton = ()=>{
    setInputVisible(!inputVisible)
    if(inputVisible){
      if(name === ""){
        alert("ToDo sem descrição")
      } else{
        postTodoAsync(name)
      }
    }
  }
  
  const postTodoAsync = async function(name){
    await postTodo(name)
      .then(res=>{
        getTodosAsync()
      })
  }

  const getTodosAsync = async function(){
    await getTodos()
      .then(res=>{
        setTodos(res.data)
      })
  }
  
  /* useEffect(()=>{
    getTodosAsync()
  }, []) */

  useEffect(()=>{
    getTodosAsync()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [<Todos/>])
  return (
    <div className="App">
      <header className="container">
        <div className='header'>
          <h1>Faz melhor, vai faz</h1>
        </div>
        <div className='todos'>
          <Todos setTodos={setTodos} getTodos={getTodosAsync} todos={todos}></Todos>
        </div>
        <input style={{display: inputVisible ? 'flex': "none"}} className="inputName" type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={handleButton} className='newTaskButton' >{inputVisible? "Salvar tarefa" : "+"}</button>
      </header>
    </div>
  );
}

export default App
