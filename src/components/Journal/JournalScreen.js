import React, { useEffect, useReducer, useState } from 'react'
import { MainApp } from './MainApp'
import { Siderbar } from './Siderbar'
import { todoReducer } from '../../helpers/todoReducer'
import { TodoContext } from '../../helpers/TodoContext'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const JournalScreen = () => {

    const [todos, todosDispatch] = useReducer(todoReducer, {}, init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    
    const [todoSelect, setTodoSelect] = useState({});
    // const handleDelete = (todo) => {
    //     todosDispatch({
    //         action: 'delete',
    //         payload: todo
    //     })
    // }


    return (
        <div className="container">
            <TodoContext.Provider value={{todos, todosDispatch, todoSelect, setTodoSelect}}>
                <Siderbar />
                <MainApp />
            </TodoContext.Provider>
        </div>
    )
}
