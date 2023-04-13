import React from 'react';
import './UserDetails.css';
import DeleteAllUser from './DeleteAllUser';
const UserDetails = () => {
  return (
    <div className='content'>
      <div className='admin-table'>
        <div className='admin-subtitle'>List of User Details</div>
        <button>add new user</button>
      </div>
      <ul>
        <li>Hi</li>
        <li>Hiiii</li>
      </ul>
      <hr />
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
