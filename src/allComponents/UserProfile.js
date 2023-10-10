import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams(); // Retrieve the userId from the URL parameter
  const users = useSelector((state) => state.users.data);
  const user = users.find((u) => u.id === parseInt(userId, 10));

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">User Profile</h2>
        </div>
        <div className="card-body">
          <h3>{user.name}</h3>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Phone: {user.phone}</p>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">Website: {user.website}</p>

          <h4>Address:</h4>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>

          <h4>Company:</h4>
          <p>Name: {user.company.name}</p>
          <p>Catch Phrase: {user.company.catchPhrase}</p>
          <p>Business: {user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
