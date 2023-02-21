import "./App.css";
import UserForm from "./components/UserForm";
import User from "./components/User";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [modal, setModal] = useState(true);
  const [users, setUsers] = useState([]);
  return (
    <div className="container">
      <UserForm setUsers={setUsers} setModal={setModal} />
      <User users={users} />
      <Modal modal={modal} setModal={setModal}></Modal>
    </div>
  );
}

export default App;
