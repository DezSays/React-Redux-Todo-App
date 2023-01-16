import React, {useState} from 'react'
import './App.css'
import { useDispatch, useSelector} from 'react-redux'
import addItem from './actions/addItem.js' 

import removeItem from './actions/removeItem.js' 

const App = () => {
  const [todoItem, setTodoItem] = useState('')
  const [todoPriority, setTodoPriority] = useState('')
  const dispatch = useDispatch(); 
  const items = useSelector(state => state.items) 
  const ul = document.getElementById('todo-list-ul')
  const li = document.createElement('li')
  const button = document.createElement('button')
  const buttonX = document.createElement('button')


  

  const addToList = () => {


    li.innerHTML = todoItem
    button.innerHTML = 'edit'
    buttonX.innerHTML = 'delete'
    li.appendChild(button)
    li.appendChild(buttonX)
    ul.appendChild(li)

    dispatch(addItem(0,todoItem,todoPriority))
    
    console.log('clg items', {items})
    buttonX.addEventListener('click', async() => {
      if(todoItem === todoItem){
        await dispatch(removeItem(todoItem))
      }

      console.log('remove')
    
    })
  }

  function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode === 13) //13 is the key code for enter
    {
        document.getElementById('todo-submit').click();

        return false;
    }
    return true;
}




  return (
    <div>
      <div id='input-bar'>
        <input type='text' placeholder='Walk the dog' value={todoItem} id='list-input' onChange={e => setTodoItem(e.target.value)} onKeyUp={searchKeyPress}/>
        <div id='priority-choices'>
          <button type='submit' value='low' onClick={(e) => setTodoPriority(e.target.value)}>low</button>
          <button type='submit' value='medium' onClick={(e) => setTodoPriority(e.target.value)}>medium</button>
          <button type='submit' value='high' onClick={(e) => setTodoPriority(e.target.value)}>high</button>
        </div>
        <button type='submit' id='todo-submit' onClick={addToList}>Add</button>
      </div>

      <ul id='todo-list-ul'>

      </ul>
      

    </div>
  )
}

export default App