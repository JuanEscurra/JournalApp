import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {LoginScreen} from '../Auth/LoginScreen'
import {RegisterScreen} from '../Auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <Router>
            <div className="auth__main">
                <div className="auth__box-container">
                    <Switch>
                        <Route exact path="/register" component={RegisterScreen} />
                        <Route exact path="/login" component={LoginScreen}/>
                        <Redirect to="/login" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
