import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import AddTodo from './AddTodo'
import Todos from './Todos'

const TodoManagement = () => {

  const [todos, setTodos] = useState([]) 



  useEffect(() => {
    
    
    setTodos([
      {
        id: uuidv4(), 
        task: 'Homework',
        priority: 'high'
        
      },
      {
        id: uuidv4(), 
        task: 'Walk the dogs',
        priority: 'medium' 
      },
      {
        id: uuidv4(), 
        task: 'Laundry',
        priority: 'low'
        
      }
      


    ])
  }, [])

  const handleAddTodo = (newTodo) => {
    setTodos([newTodo, ...todos])
  }

  const handleRemoveTodo = (id) => {
    let filteredTodo = todos.filter(todo =>{

      return id !== todo.id;

    })

    setTodos(filteredTodo)
  }

  

  return (
    <>
      <h1>Todo List</h1>

      <Todos todos={todos} deleteTodo={id =>handleRemoveTodo(id)}/>

      <AddTodo addTodo={todo => handleAddTodo(todo)}/>
    </>
  )
}

export default TodoManagement
