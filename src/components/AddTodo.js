import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {v4 as uuidv4} from 'uuid'


const AddTodo = ({addTodo}) => {


  
  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    let newTask = {
      id: uuidv4,
      task,
      priority
    }

    addTodo(newTask) 
  }

  return (
    <>
      

      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">

          <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Task</Form.Label>
              <Form.Control type="text" placeholder="Task" value={task} 
              onChange={e=> setTask(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Priority</Form.Label>
              <Form.Control type="text" placeholder="Priority" value={priority} 
              onChange={e=> setPriority(e.target.value)}/>
            </Form.Group>

           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </div>
          </div>
      </div>
    </>
  )
}

export default AddTodo
