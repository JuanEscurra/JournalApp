import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { startRegisterWithEmail } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formData, handleInputChange] = useForm({
        displayName: 'juan',
        email: '2017140011@untels.edu.pe',
        password: '123456',
        repeatPassword: '123456'
    });
    const {displayName,email,password,repeatPassword} = formData;
    const [errors, setErrors] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            dispatch(startRegisterWithEmail(email,password,displayName));
        }
    }

    const isFormValid = () => {
        let errorsInputs = {};
        if(!validator.isEmail(email)) {
            errorsInputs = {...errorsInputs,email: 'The email is not valid'}
        }
        if(password !== repeatPassword) {
            errorsInputs = {...errorsInputs, password: 'Passwords do not match'};
        }
        setErrors({...errorsInputs});
        return Object.entries(errorsInputs).length===0;
    }

    return (
        <div>
            <h1>RegisterScreen</h1>
            <form onSubmit={handleRegister} method="post">
                <div>
                    <label className="login__label">Name</label>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="enter your name"
                        className="login__input"
                        value={displayName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="login__label">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="enter your email address"
                        className={`login__input ${!!errors.email ? 'error':''}`}
                        value={email}
                        onChange={handleInputChange}
                    />
                    <div>
                        {!!errors.email ? errors.email:''}
                    </div>
                </div>
                <div>
                    <label className="login__label">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        className={`login__input ${!!errors.password ? 'error':''}`}
                        value={password}
                        onChange={handleInputChange}
                    />
                    <div>
                        {!!errors.password ? errors.password:''}
                    </div>
                </div>
                <div>
                    <label className="login__label">Repeat password</label>
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder="enter your repeat password"
                        className="login__input"
                        value={repeatPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
