import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './Router/AppRouter'
import { store } from './store/store'


export const JournalApp = () => {

    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
    
}
