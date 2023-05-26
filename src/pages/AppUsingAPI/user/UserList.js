import React, { useEffect, useState } from 'react';
import Menu from '../../navigation/Menu';
import axios from 'axios';

const UserList = () => {
  const [userDatas, setUserDatas] = useState([]);

  const getAllUser = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // console.log('response-->', response.data);
        setUserDatas(response.data);
      })
      .catch((err) => {
        console.log('err->', err);
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  console.log('userDatas->', userDatas);

  return (
    <div>
      <Menu />
      <div>
        <h1>User List</h1>
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>User Name</th>&nbsp;
              <th>Email</th>&nbsp;
              <th>Phone</th>&nbsp;
              <th>Street</th>&nbsp;
              <th col="3">Action</th>
            </tr>
          </thead>
          {userDatas &&
            userDatas.map((uData, index) => {
              console.log('uData-->', uData);
              return (
                <tbody>
                  <tr>
                    <td>{uData.id}</td>
                    <td>{uData.name}</td>&nbsp;&nbsp;&nbsp;
                    <td>{uData.email}</td>&nbsp;&nbsp;&nbsp;
                    <td>{uData.phone}</td>&nbsp;&nbsp;&nbsp;
                    <td>{uData.address.street}</td>&nbsp;&nbsp;&nbsp;
                    <td>
                      <button>View</button>&nbsp;&nbsp;&nbsp;
                      <button>Edit</button>&nbsp;&nbsp;&nbsp;
                      <button>Delete</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default UserList;
