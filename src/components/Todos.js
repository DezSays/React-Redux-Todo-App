
import React from "react";
import TodoItems from './TodoItems'

const Todos = ({todos, deleteTodo}) =>{
    return (<>
    <div className="container">
        <div className="row">
            <div className="col-8 offset-2">
                <ul>
                    {todos.map(todoObj => {
                        return <TodoItems key={todoObj.id} todo={todoObj} onDelete={deleteTodo}/>
                    })}
                </ul>
            </div>
        </div>
    </div>
    
    
    </>)
}
export default Todos

