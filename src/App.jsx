import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import DisplayMembers from './components/DisplayMembers';


function App() {
  const [membersList, setMembersList] = useState([]);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form membersList={membersList} setMembersList={setMembersList} />
      <DisplayMembers membersList={membersList} />
    </div>
  );
}

export default App;
