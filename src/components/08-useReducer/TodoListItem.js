import React from 'react'

export const TodoListItem = ({todo,index,handleDelete,handleToggle}) => {
    return (
        <div>
            <li key={todo.id} className="list-group-item">
                        <p className={`${todo.done && 'complete'}`}
                            onClick={()=> handleToggle(todo.id)}
                        >{index+1}. {todo.desc}</p>
                        <button className="btn btn-danger" onClick={()=> handleDelete(todo.id)}> borrar</button>
                    </li>
        </div>
    )
}
