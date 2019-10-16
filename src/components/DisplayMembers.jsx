import React from 'react';
import styled from 'styled-components';

const StyledMembers = styled.div.attrs( props => ({
  className: 'display-members',
  }))`

  width: 80%;
  min-width: 300px;
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-shadow: 0 0 8px rgba( 33, 33, 33, 0.3);
`;

const StyledMember = styled.div.attrs( props => ({
  className: 'member',
  }))`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 2rem;
  padding: 0.4rem;
  box-shadow: 0 0 8px rgba( 33, 33, 33, 0.8);
`;

const DisplayMembers = ( props ) => {

  return (
    <StyledMembers className='display-members'>
    {
      props.membersList.map( ( member, index ) => (
        <StyledMember key='index' className='member'>
          <h3>{ member.name }</h3>

          <dl>
            <dt>
              { member.email }</dt>
            <dt>
              { member.role  }</dt>
          </dl>
        </StyledMember>
      ))
    }
    </StyledMembers>
  );
};

export default DisplayMembers;
