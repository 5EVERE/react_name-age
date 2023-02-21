import "./UserForm.css";
import { useState } from "react";
const UserForm = function (props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const setName = function (e) {
    setUserName(e.target.value);
  };
  const setAge = function (e) {
    setUserAge(e.target.value);
  };

  const addUser = function (e) {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      props.setModal(false);
      return;
    }
      props.setUsers((previous) => {
        const update = [...previous];
        update.unshift({
          id: Math.random().toString(),
          name: userName,
          age: userAge,
        });
        return update;
      });
    setUserName("");
    setUserAge("");
  };
  return (
    <div className="form-container">
      <form onSubmit={addUser} className="form">
        <label>Ім'я</label>
        <input value={userName} onChange={setName} type="text"></input>
        <label>Вік</label>
        <input value={userAge} onChange={setAge} type="number"></input>
        <button className="button">Добавити Користувача</button>
      </form>
    </div>
  );
};
export default UserForm;
