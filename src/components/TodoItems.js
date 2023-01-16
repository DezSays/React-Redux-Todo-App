
import React from "react";



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
                <button onClick={() => onDelete(todo.id)}>X</button>
                
            </div>
        </div>
    </li>
    
    </>)
}
export default TodoItems

