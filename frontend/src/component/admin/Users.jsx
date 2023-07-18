import React from 'react';
import me from "../../assets/founder.jpg";


const Users = () => {
    const arr = [1,2,3,4];
  return<section className='tableClass'>
  <main>
      <table>
          <thead>
              <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>Role</th>
                  <th>Since</th>
              </tr>
          </thead>
          <tbody>
              {
                  arr.map(i=>(
                  <tr key={i}>
                  <td>1234</td>
                  <td>Virat Kholi</td>
                  <td>
                    <img src={me} alt="Users" />
                  </td>
                  <td>Admin</td>
                  <td>{"24-02-2023"}</td>
                </tr>
                  ))
              }
          </tbody>
      </table>
  </main>
</section>
};

export default Users;