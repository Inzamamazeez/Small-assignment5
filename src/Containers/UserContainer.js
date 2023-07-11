import React from 'react';
import UserList from '../Components/UserList';
import UserForm from '../Components/UserForm';

const UserContainer = () => {
    return(
        <div>
            <UserForm/>
            <UserList/>
        </div>
    )
}

export default UserContainer;