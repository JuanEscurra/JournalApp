import React, { useContext } from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import {LoginScreen} from '../components/Auth/LoginScreen'
import {RegisterScreen} from '../components/Auth/RegisterScreen'

export const AuthRouter = () => {

    return (
        <div>
            {/* <div className="main-content"> */}
                <Switch>
                    <Route exact path="/auth/register" component={RegisterScreen} />
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Redirect to="/auth/login" />
                </Switch>
            {/* </div> */}
        </div>
    )
}
