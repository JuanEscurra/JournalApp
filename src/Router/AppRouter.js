import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import {firebase} from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/Journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid) {
                dispatch(login(user.uid,user.displayName));
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
            setChecking(false);
        })
    }, [dispatch,setChecking,setIsLogged]);

    if(checking) {
        return (
            <h1>Cargando ...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLogged} />
                    <PrivateRoute exact path="/" component={JournalScreen} isAuthenticated={isLogged}/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}