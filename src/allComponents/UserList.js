import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../redux/slices/usersSlice';

const UserList = () => {
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center mt-4 mb-4 mx-1">
      <div className="col-md-8">
        <h2 align='center'>User List</h2>
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <Link to={`/user-profile/${user.id}`} className="btn btn-primary">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
