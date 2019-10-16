import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 80%;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledFieldset = styled.fieldset`
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  box-shadow: 0 0 8px rgba( 33, 33, 33, 0.8);
`;

const StyledLabel = styled.label`
  margin: 1rem;
`;

const StyledInput = styled.input`
  margin-left: 0.2rem;
`;

const StyledEmail = styled.input`
  margin-left: 0.3rem;
`;

const StyledSelect = styled.select`
  margin-left: 0.8rem;
`;

const StyledSubmit = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

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
    <StyledForm onSubmit={ evt => submit(evt) }>
      <StyledFieldset>
        <h4>Add Team Members:</h4>
        <StyledLabel>
          Name:<StyledInput
            type='text'
            name='name'
            onChange={ handleChanges }
            id='nameInput'
            value={member.name} /></StyledLabel>

        <StyledLabel>
          Email:<StyledEmail
            type='text'
            name='email'
            onChange={ handleChanges }
            id='emailInput'
            value={member.email} /></StyledLabel>

        <StyledLabel>
          Role:
          <StyledSelect
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
          </StyledSelect>
        </StyledLabel>

        <StyledSubmit>Add Member</StyledSubmit>
      </StyledFieldset>

    </StyledForm>
  );
};

export default Form;
