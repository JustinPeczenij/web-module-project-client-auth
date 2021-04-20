import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function FriendsList() {
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        email: '',
        id: ''
    })

    const handleChanges = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    
    const postFriendToDB = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', formValues)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={postFriendToDB} >
                <legend>Add a Friend</legend>
                <input 
                    name='name'
                    placeholder='name'
                    type='text'
                    value={formValues.name}
                    onChange={handleChanges}
                />
                    <input 
                        name='email'
                        placeholder='email'
                        type='email'
                        value={formValues.email}
                        onChange={handleChanges}
                    />
                <input 
                    name='age'
                    placeholder='age'
                    type='number'
                    value={formValues.age}
                    onChange={handleChanges}
                />
                <button type='submit'>Add a Friend!</button>
            </form>
        </div>
    )
}

export default FriendsList;