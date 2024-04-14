import React, { useContext } from "react";
import { AppContext } from "../store/AppContextProvider";
import '../App.css';

function UserForm() {
  const { user, setUser, addUser, updateUser, action } = useContext(AppContext);

  return (
    <div className="form">
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <label htmlFor="">Email</label>
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="">Address</label>
      <textarea
        name=""
        id=""
        value={user.address}
        cols="30"
        rows="5"
        onChange={(e) => setUser({ ...user, address: e.target.value })}
      ></textarea>
      {action === "Add" && (
        <button className="btn" onClick={() => addUser()}>
          Submit
        </button>
      )}
      {action === "Edit" && (
        <button className="btn" onClick={() => updateUser()}>
          Update
        </button>
      )}
    </div>
  );
}

export default UserForm;
