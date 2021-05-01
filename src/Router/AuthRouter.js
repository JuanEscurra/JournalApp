import React, { useContext } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {LoginScreen} from '../components/Auth/LoginScreen'
import {RegisterScreen} from '../components/Auth/RegisterScreen'
import {PrivateRoute} from './PrivateRoute'
import {JournalScreen} from '../components/Journal/JournalScreen';
import { AuthContext } from '../components/Auth/AuthContext'

export const AuthRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            {/* <div className="main-content"> */}
                <Switch>
                    <Route exact path="/register" component={RegisterScreen} />
                    <Route exact path="/login" component={LoginScreen}/>
                    <PrivateRoute path="/" component={JournalScreen} isAuthenticated={user.logged} />
                    <Redirect to="/login" />
                </Switch>
            {/* </div> */}
        </Router>
    )
}
