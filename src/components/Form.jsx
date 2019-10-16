// members list array of member objects
// name email role

import React, { useState } from 'react';

const Form = ( props ) => {
  const [member, setMember] = useState( { name: '', email: '', role: ''} );

  const setMembersList = props.setMembersList;

  const handleChanges = ( evt ) => {
    evt.preventDefault();
    setMember( { ...member, [evt.target.name]: evt.target.value} );
  };

  const submit = ( evt ) => {
    evt.preventDefault();
    setMembersList( [...props.membersList, member] );
    setMember( { name: '', email: '', role: '' } );
  };

  return (
    <form onSubmit={ evt => submit(evt) }>
      <fieldset>
        <legend>Add Team Members:</legend>
        <label>
          Name:<input
            type='text'
            name='name'
            onChange={ handleChanges }
            id='nameInput'
            value={member.name} /></label>

        <label>
          Email:<input
            type='text'
            name='email'
            onChange={ handleChanges }
            id='emailInput'
            value={member.email} /></label>

        <label>
          Role:
          <select
            onChange={ handleChanges }
            id='role'
            name='role'
            value={member.role}>

            <option />
            <option>
              UI/UX</option>
            <option>
              Jr. Frontend Dev</option>
            <option>
              Sr. Frontend Dev</option>
            <option>
              Jr. Backend Dev</option>
            <option>
              Sr. Backend Dev</option>
          </select>
        </label>

        <button>Add Member</button>
      </fieldset>

    </form>
  );
};

export default Form;