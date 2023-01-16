
import React from "react";
import Button from "react-bootstrap/esm/Button";



const TodoItems = ({todo, onDelete}) =>{
    return (<>
    <li>
        <div className="row">
            <div className="col-8">
                {todo.task}
                &nbsp;&nbsp;
                {todo.priority}
                &nbsp;&nbsp;
                
            </div>
            <div className="col-4">
                <Button variant="danger" onClick={() => onDelete(todo.id)}>X</Button>
                
            </div>
        </div>
    </li>
    
    </>)
}
export default TodoItems

