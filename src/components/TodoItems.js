
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const TodoItems = ({todo, onDelete}) =>{

    if(todo.priority ==='low'){
        console.log('low priority')
    }
    else if(todo.priority === 'medium'){
        console.log('medium priority')
    }
    else if(todo.priority === 'high'){
        console.log('high priority')
    }
    else{
        console.log('null priority')
    }

    return (
    
        <>
        <ListGroup as="ul">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{todo.task}</div>
              </div>
            <Badge bg="primary" pill >
                {todo.priority}
            </Badge>
            <div >
                <Button variant="success" onClick={() => onDelete(todo.id)}>✓</Button>       
            </div>
            </ListGroup.Item>
        </ListGroup>

        </>
    
    )
}
export default TodoItems

