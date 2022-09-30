import React, { useState, useEffect } from 'react';
import './styleApp/App.css';
import { Todos } from '../components/Todos';
import { getTodos, postTodo } from "../axios-routes/axiosRoutes"

function App() {

  const [todos, setTodos] = useState([])

  const teste = async function(){
    await getTodos()
      .then(res=>{
        setTodos(res.data)
      })
  }
  
  useEffect(()=>{
    getTodos()
    teste()
  }, [])

  const [name, setName] = useState("")

  return (
    <div className="App">
      <header className="container">
        <div className='header'>
          <h1>Faz melhor, vai faz</h1>
        </div>
        <div className='todos'>
          <Todos todos={todos}></Todos>
        </div>
        <input className="inputName" type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <button className='newTaskButton'>Add Tarefinha</button>
      </header>
    </div>
  );
}

export default App;
