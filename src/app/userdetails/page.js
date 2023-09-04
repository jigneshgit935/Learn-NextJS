import Image from 'next/image';
import React from 'react';

async function getUser() {
  let user = await fetch('https://dummyjson.com/users');
  user = await user.json();
  return user.users;
}

const UserDetails = async () => {
  let users = await getUser();
  console.log(users);
  return (
    <div>
      <h2>UserDetails</h2>

      <main>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          {users.map((item, index) => (
            <div
              key={index}
              style={{
                margin: '10px',
                width: '400px',
                boxShadow: '0px 0px 12px 2px',
              }}
            >
              <div style={{ padding: '15px' }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h4>First Name: {item.firstName}</h4>
                  <h4>Last Name: {item.lastName}</h4>
                </div>
                <h3 style={{ textAlign: 'center' }}>
                  Maiden Name: {item.maidenName}
                </h3>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h5>Age :{item.age}</h5>
                  <h5>Gender :{item.gender}</h5>
                </div>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h5>Phone No :{item.phone}</h5>
                  <h5>Email :{item.email}</h5>
                </div>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h5>Username: {item.username}</h5>
                  <h5>Password: {item.password}</h5>
                </div>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h5>Birth Data: {item.birthDate}</h5>
                  <h5>Blood Group :{item.bloodGroup}</h5>
                </div>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Image
                    src={item.image}
                    alt="img"
                    style={{
                      margin: 'auto',
                    }}
                    width={150}
                    height={150}
                  />
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h5>EyeColor: {item.eyeColor}</h5>
                  <h5>Weight: {item.weight}kg</h5>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p style={{ fontSize: '12px', fontWeight: '600' }}>
                    University: {item.university}
                  </p>
                  <p style={{ fontSize: '12px', fontWeight: '600' }}>
                    domain :{item.domain}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3></h3>
      </main>
    </div>
  );
};

export default UserDetails;
