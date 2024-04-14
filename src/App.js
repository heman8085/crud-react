import React, { useContext } from "react";
import "react-responsive-modal/styles.css";
import { PlusCircle } from "react-feather";
import { Modal } from "react-responsive-modal";
import { AppContext } from "./store/AppContextProvider";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const { open, onOpenModal, onCloseModal } = useContext(AppContext);

  return (
    <div className="container">
      <div className="d-flex">
        <h1>CRUD APP</h1>
      </div>
      <div className="toolbar">
        <button className="btn btn-p" onClick={onOpenModal}>
          <PlusCircle size={16}></PlusCircle>
          <span>Add</span>
        </button>
      </div>
      <hr />
      <UserList />
      <Modal open={open} onClose={onCloseModal}>
        <UserForm />
      </Modal>
    </div>
  );
}

export default App;
