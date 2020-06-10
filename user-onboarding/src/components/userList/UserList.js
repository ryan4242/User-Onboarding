import React from 'react';
import './userList.css';

const UserList = props => {
  return (
    <div className='users'>
      <h1>Users</h1>
      <div className='usersContainer'>
        {props.users.map(user => <h3 className='user' key={user.id}>{user.name}</h3>)}
      </div>
    </div>
    
  )
};

export default UserList;