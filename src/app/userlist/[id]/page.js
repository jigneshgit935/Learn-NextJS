import React from 'react';
import GetUsers from '../../../../services/getUsers';
import Link from 'next/link';

const UserDetails = async (props) => {
  const GetUserList = GetUsers();
  const users = await GetUserList;
  const currentId = props.params.id;
  const userData = users[currentId - 1];
  console.log(userData);
  return (
    <div>
      <h2>User Details</h2>
      <Link href="/userlist">Go Back</Link>

      <div
        style={{
          border: '2px solid black',
          boxShadow: '0px 0px 8px 2px',
          width: '900px',
          padding: '20px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <h2>Id: {userData.id}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Name: {userData.name}</h2>
          <h2>User Name: {userData.username}</h2>
        </div>
        <h2
          style={{
            margin: 'auto',
            padding: '10px',
            boxShadow: '0px 0px 8px 1px',
            width: 'fit-content',
          }}
        >
          Email: {userData.email}
        </h2>
        <h2
          style={{
            textAlign: 'center',
            boxShadow: '0px 0px 8px 1px',
          }}
        >
          Address: <br />
          <span style={{ fontSize: '18px' }}>
            Street:-{userData.address.street}
          </span>
          ,<span style={{ fontSize: '18px' }}>{userData.address.suite}</span>,
          <span style={{ fontSize: '18px' }}>{userData.address.city}</span>,
          <span style={{ fontSize: '18px' }}>{userData.address.zipcode}</span>,
          <span style={{ fontSize: '18px' }}>{userData.address.geo.lat}</span>
          <span style={{ fontSize: '18px' }}>{userData.address.geo.lng}</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Phone No: {userData.phone}</h2>
          <h2>Website: {userData.website}</h2>
        </div>
        <div>
          <h2
            style={{
              textAlign: 'center',
              boxShadow: '0px 0px 8px 1px',
              padding: '10px',
            }}
          >
            Company
            <div>
              <h4>Name: {userData.company.name}</h4>
              <h4>Catch Phrase: {userData.company.catchPhrase}</h4>
              <h4>Bs: {userData.company.bs}</h4>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

export async function GenerateStaticParams() {
  const GetUserList = GetUsers();
  const users = await GetUserList;
  users.map((user) => ({
    id: user.id.toString(),
  }));
}
