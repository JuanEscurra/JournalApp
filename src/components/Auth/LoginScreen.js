import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const LoginScreen = () => {
    const history = useHistory();
    const {userDispatch} = useContext(AuthContext);
    
    const handleSignIn = (e) => {
        e.preventDefault();
        userDispatch({
            payload: {
                name: 'archys.wow@gmail.com'
            },
            type: 'login'
        });
        history.replace("/");
    }

    return (
        <div className="login">
            <h1>LoginScreen</h1>
            <form onSubmit={handleSignIn} method='post' className='login__form'>
                <div>
                    <label className="login__label">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="enter your email address"
                        className="login__input"
                    />
                </div>
                <div>
                    <label className="login__label">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        className="login__input"    
                    />
                </div>
                <button type="submit" className="login__button">Sign in</button>
            </form>
        </div>
    )
}
