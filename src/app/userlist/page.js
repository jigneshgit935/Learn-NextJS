import React, { use } from 'react';
import GetUsers from '../../../services/getUsers';
import Link from 'next/link';

const UserList = async () => {
  const GetUserList = GetUsers();
  const users = await GetUserList;
  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map((user, index) => (
          <Link
            href={`/userlist/${user.id}`}
            key={index}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <div
              style={{
                boxShadow: '0px 0px 8px 1px',
                padding: '10px',
                margin: '10px 0px',
              }}
            >
              <h3>{user.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
