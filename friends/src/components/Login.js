import React, { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password:'',
    })

    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = () => {

    }

    return (
        <form onSubmit={login}>
            <legend>Login</legend>
            <input 
                placeholder='username'
                type='text'
                value={credentials.username}
                name='username'
                onChange={handleChanges}
                />
            <input 
                placeholder='password'
                type='text'
                value={credentials.password}
                name='password'
                onChange={handleChanges}
            />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;