import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const blankuser = {
    name: "",
    email: "",
    address: "",
  };

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("Add");
  const [userdata, setUserdata] = useState([]);
  const [user, setUser] = useState(blankuser);
  const [editIndex, setEditIndex] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setAction("Add");
  };

  const addUser = () => {
    setUserdata([...userdata, user]);
    setUser(blankuser);
    onCloseModal();
  };

  const editUser = (index) => {
    setAction("Edit");
    const selectedUser = userdata.find((x,i) => i === index);
    setUser(selectedUser);
    setEditIndex(index);
    onOpenModal();
  };

  const updateUser = () => {
    const newusers = userdata.map((x, i) => {
      if (i === editIndex) {
        x = user;
      }
      return x;
    });
    setUserdata(newusers);
    setUser(blankuser);
    setEditIndex(null);
    onCloseModal();
  };

  const deleteUser = (index) => {
    const newusers = userdata.filter((x, i) => i !== index);
    setUserdata(newusers);
  };

  return (
    <AppContext.Provider
      value={{
        open,
        action,
        user,
        userdata,
        editIndex,
        setUser,
        onOpenModal,
        onCloseModal,
        addUser,
        editUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
