import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        // Login
        auth().signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((e) => alert(e.message));
    }
    const register = event => {
        event.preventDefault();
        auth().createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            })
            .catch((e) => alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://i.imgur.com/ywvi9Oa.png'
                    alt='amazon_logo'
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                        type='email' 
                    />
                    <h5>Password</h5>
                    <input 
                        value={password} 
                        onChange={event => setPassword(event.target.value)}
                        type='password' 
                    />
                    <button 
                        type='submit'
                        onClick={login}
                        className='login__signInButton'>
                        Continue
                    </button>                    
                </form>
                <p>By continuing, you agree to Playzon's Conditions of Use and Privacy Notice.</p>
                <button 
                    onClick={register}
                    className='login__registerButton'>
                    Create your Playzon Account
                </button> 
            </div>
        </div>
    )
}

export default Login