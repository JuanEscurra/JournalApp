import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../../helpers/TodoContext'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = () => {

    const {todoSelect, setTodoSelect, todosDispatch} = useContext(TodoContext);

    const [{id,name,description}, handleInputChange, reset, setFormData] = useForm({
        id: "",
        name: "",
        description: ""
    });
    
    useEffect(() => {
        if(JSON.stringify(todoSelect) !== "{}") {
            setFormData(todoSelect);
        } 
    }, [todoSelect]);

    const handleAddShipped = (e) => {
        e.preventDefault();
        const task = {
            id: id || new Date().getTime(),
            name: name,
            description: description
        };
        todosDispatch({
            type: !id ? 'add' : 'edit',
            payload: task
        });
        setTodoSelect(task);
    }

    return (
        <div className="todo-add">
            <h3 className="todo-add__title">Add a task</h3>
            <form onSubmit={handleAddShipped} className="todo-add___login">
                <div className="todo-add__field">
                    <label>Name:</label>
                    <input
                        className="todo-add__input"
                        type="text" name="name" placeholder="Task name"
                        onChange={handleInputChange}
                        value={name}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        className="todo-add__input todo-add__input--textarea"
                        name="description" placeholder="Task description"
                        onChange={handleInputChange}
                        value={description}
                    />
                </div>
                <button type="submit" className="todo-add__btn">Add</button>
            </form>
        </div>
    )
}
