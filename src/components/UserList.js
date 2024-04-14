import React, { useContext } from "react";
import { AppContext } from "../store/AppContextProvider";
import '../App.css';

function UserList() {
  const { userdata, editUser, deleteUser } = useContext(AppContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userdata.length > 0 &&
          userdata.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button className="btn ml2" onClick={() => editUser(index)}>
                    Edit
                  </button>
                  <button className="btn ml2" onClick={() => deleteUser(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default UserList;
