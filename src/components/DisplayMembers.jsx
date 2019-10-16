import React from 'react';

const DisplayMembers = (props) => {

  return (
    <div className='display-members'>
    {
      props.membersList.map( (member, index) => (
        <div key='index' className='member'>
          <h3>{member.name}</h3>
          <h4>{member.email}</h4>
          <p>{member.role}</p>
        </div>
      ))
    }
    </div>
  );
};

export default DisplayMembers;