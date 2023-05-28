import React, { useEffect, useState } from 'react';
import Menu from '../../navigation/Menu';
import axios from 'axios';

const UserList = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllUser = () => {
    setIsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setIsLoading(true);
        // console.log('response-->', response.data.length);
        if (response.status === 200) {
          setUserDatas(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log('err->', err);
      });
  };

  useEffect(() => {
    // ComponentDidMount
    getAllUser();
  }, []);

  // console.log('userDatas->', userDatas);

  return (
    <div>
      <Menu />
      <div>
        <h1>User List</h1>
        {isLoading === true ? (
          <h2 style={{ color: '#000' }}>Data is coming please wait...</h2>
        ) : userDatas.length === 0 ? (
          <h2 style={{ color: '#000' }}>No user found!!</h2>
        ) : (
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
                // console.log('uData-->', uData);
                return (
                  <tbody key={uData.id}>
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
        )}
      </div>
    </div>
  );
};

export default UserList;
