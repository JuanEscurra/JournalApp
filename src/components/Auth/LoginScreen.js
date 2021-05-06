import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import {useForm} from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    const [formData,handleInputChange] = useForm({
        email: '2017140011@untels.edu.pe',
        password: '123456'
    });
    const {email,password} = formData;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }


    return (
        <div className="content" style={{backgroundImage: `url("/assets/background.jpg")`}}>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleLogin} method='post' className='login__form'>
                    <div className="login__field">
                        <label className="login__label">Email</label>
                        <div className="login__input-wrapper">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="text"
                                name="email"
                                placeholder="enter your email address"
                                className="login__input"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="login__field">
                        <label className="login__label">Password</label>
                        <div className="login__input-wrapper">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                name="password"
                                placeholder="enter your password"
                                className="login__input"
                                value={password}
                                onChange={handleInputChange}    
                            />
                        </div>
                    </div>
                    <button type="submit" className={`login__button ${loading?"loading":""}`} disabled={loading}>
                        Sign in
                    </button>
                    <Link 
                        to="/auth/register"
                        className="link"
                    >
                        Do not you have an account yet ? Sign up
                    </Link>
                </form>
                <div>
                    <p>Login With social networking</p>
                    <div className="login__social">
                        <button onClick={handleGoogleLogin} className="login__button--social">
                            <img src="../assets/google.png" alt="google"/>
                            <b>Sign In with google</b>
                        </button>
                        <button onClick={handleGoogleLogin} className="login__button--social">
                            <img src="../assets/facebook.png" alt="facebook"/>
                            <b>Sign In with Facebook</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
