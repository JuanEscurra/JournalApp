import React, { useContext } from 'react'
import { TodoContext } from '../../helpers/TodoContext';

export const TodoListItem = ({todo}) => {
    
    const {setTodoSelect} = useContext(TodoContext);
    

    const handleOpenTodo = () => {
        setTodoSelect(todo);
    }

    return (
        <div className="todo" onClick={handleOpenTodo}>
            <small className="todo__title">{todo.name}</small>
            <p className="todo__description">{todo.description}</p>
            <button className="todo__btn todo__btn--primary">Completado</button>
            <button className="todo__btn todo__btn--delete">Eliminar</button>
        </div>
    )
}
