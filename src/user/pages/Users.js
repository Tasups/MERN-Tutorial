import React from 'react';
import UsersList from '../components/UsersList.js';

const Users = () => {
    
    const USERS = [
        {
            id: 'us1', 
            name: 'Jason Whisnant', 
            places: 3, 
            image: "https://github.com/Tasups/images/blob/main/CthulhuReader.jpg?raw=true"
        }
    ];
    
    return(
        <UsersList items={USERS}/>
        )
}

export default Users;