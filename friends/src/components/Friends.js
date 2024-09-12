import React from 'react';

function Friends(props) {
    const { friend } = props

    return (
        <div className='friends-list'>
            <h3>{friend.name}</h3>
            <p>Email: {friend.age}</p>
            <p>Age: {friend.age}</p>
        </div>
    )
}

export default Friends