import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import DisplayMembers from './components/DisplayMembers';


function App() {
  const [membersList,  setMembersList ] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(  );

  const editMember = ( member ) => {
    
    setMembersList( membersList.map( mem => {
      return ( mem.id === member.id ? { ...mem, ...member } : mem );  }
      )  
    )
  } 

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form 
        membersList     = { membersList     }
        setMembersList  = { setMembersList  }
        member          = { memberToEdit    }
        setMemberToEdit = { setMemberToEdit }
        editMember      = { editMember      } />
      <DisplayMembers
        membersList     = { membersList     }
        setMemberToEdit = { setMemberToEdit } />
    </div>
  );
}

export default App;
