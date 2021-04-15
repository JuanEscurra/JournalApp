import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {LoginScreen} from '../Auth/LoginScreen'
import {RegisterScreen} from '../Auth/RegisterScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                <Switch>
                    <Route exact path="/register" component={RegisterScreen} />
                    <Route exact path="/login" component={LoginScreen}/>
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}
