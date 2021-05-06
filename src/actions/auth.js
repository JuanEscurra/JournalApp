import Swal from 'sweetalert2'

import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import {types} from '../types/types'
import { FinishLoading, startLoading } from './ui';

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async({user})=> {
                await dispatch(login(user.uid, user.displayName));
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'login failed',
                    text: error
                })
            }).finally(() => {
                dispatch(FinishLoading());
            });
    }
}

export const startGoogleLogin = (email,password) => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) => {
                dispatch(login(user.uid,user.displayName));
            }).catch(error => {
                console.log(error);
            })
    }
}


export const startRegisterWithEmail = (email,password,displayName) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async({user}) => {
                await user.updateProfile({displayName:displayName});
                dispatch(login(user.uid,user.displayName));
            }).catch((err => {
                console.log(err);
            }))
    }
}

export const logout = () => ({
    type: types.logout
});

export const startLogout = () => {
    return async(dispatch) => {
        firebase.auth().signOut();
        dispatch(logout());
    }
}