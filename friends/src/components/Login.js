import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        username:'',
        password:''
    })
    
    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const history = useHistory();

    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                console.log(res)
                setIsLoading(true)
                window.localStorage.setItem('token', res.data.payload)
                history.push('/friends-list')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                isLoading ? <h3>Loading...</h3> : 

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
            }
        </div>
    )
}

export default Login;