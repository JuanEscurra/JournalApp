import React, { useReducer } from 'react'
import { AuthRouter } from './Router/AuthRouter'
import { AuthContext } from './Auth/AuthContext';
import { authReducer } from './Auth/AuthReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const JournalApp = () => {

    const [user, userDispatch] = useReducer(authReducer, {}, init);

    return (
        <AuthContext.Provider value={{user, userDispatch}}>
            <AuthRouter />
        </AuthContext.Provider>
    )
    
}
