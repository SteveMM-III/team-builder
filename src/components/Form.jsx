import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from "uuid";

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
  // const newId = uuid.v4();
  
  const [member, setMember] = useState( { id: '', name: '', email: '', role: ''} );
  const [isEditing, setIsEditing] = useState( false );

  const setMembersList = props.setMembersList;
  const editMember = props.editMember;

  const setMemberToEdit = props.setMemberToEdit;

  useEffect( () => {
    if ( props.member ) {
      setIsEditing( () => true );
      setMember( () => { return { ...member, ...props.member } } );
    } else {
      setMember( () => { return { ...member, id: uuid.v4()   } } );
    }
      
  }, [props.member]);

  const handleChanges = ( evt ) => {
    evt.preventDefault();
    setMember( { ...member, [ evt.target.name ]: evt.target.value } );
  };

  const submit = ( evt ) => {
    evt.preventDefault();

    if ( isEditing ) {
      editMember     ( member      );
      setIsEditing   ( () => false );
      setMemberToEdit( ''          );

      setMember( { id: '', name: '', email: '', role: '' } );
    } else {
      setMembersList( [ ...props.membersList, member ] );
      setMember     ( { id: uuid.v4(), name: '', email: '', role: '' } );
    }
  };
  const buttonTxt = isEditing ? 'Update' : 'Add Member';
  return (
    <StyledForm onSubmit={ evt => submit(evt) }>
      <StyledFieldset>
        <h4>Add Team Members:</h4>
        <StyledLabel>
          Name:<StyledInput
            type='text'
            name='name'
            id  ='nameInput'
            onChange={ handleChanges }
            value   ={ member.name   } /></StyledLabel>

        <StyledLabel>
          Email:<StyledEmail
            type='text'
            name='email'
            id  ='emailInput'
            onChange={ handleChanges }
            value   ={ member.email  } /></StyledLabel>

        <StyledLabel>
          Role:
          <StyledSelect
            id  ='role'
            name='role'
            value   ={ member.role   }
            onChange={ handleChanges }>

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

        <StyledSubmit>{ buttonTxt }</StyledSubmit>
      </StyledFieldset>

    </StyledForm>
  );
};

export default Form;
