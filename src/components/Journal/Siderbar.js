import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import {TodoList} from './TodoList'

export const Siderbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div className="siderbar">
            <div>
                <h3>Email address</h3>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <TodoList />
        </div>
    )
}
