import React,{ useContext} from 'react'
import { TodoContext } from '../../helpers/TodoContext';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {

    const {todos} = useContext(TodoContext);

    return (
        <div>
            <h3>TodoList</h3>
            <div className="todo-list">
                {
                    todos.map((todo) => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}    
                        />
                    ))
                }
            </div>
        </div>
    )
}
