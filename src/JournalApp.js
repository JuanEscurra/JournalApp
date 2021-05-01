import React, { useEffect, useReducer } from 'react'
import { AuthRouter } from './Router/AuthRouter'
import { AuthContext } from './components/Auth/AuthContext';
import { authReducer } from './components/Auth/AuthReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const JournalApp = () => {

    const [user, userDispatch] = useReducer(authReducer, {}, init);
    
    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
    }, [user])

    return (
        <AuthContext.Provider value={{user, userDispatch}}>
            <AuthRouter />
        </AuthContext.Provider>
    )
    
}
