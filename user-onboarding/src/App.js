import React, {useState} from 'react';
import './App.css';
import Form from './components/form/form/Form';
import UserList from './components/form/userList/UserList'

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <Form users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
