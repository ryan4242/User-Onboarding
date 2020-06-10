import React from 'react';

const UserList = props => {
  return (
    <div className='usersContainer'>
      {props.users.map(user => <h3 className='user'>{user.name}</h3>)}
    </div>
  )
};

export default UserList;