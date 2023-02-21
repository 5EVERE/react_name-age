import "./User.css";
const User = function (props) {
  return (
    <div className="output-container">
      {props.users.map((user) => (
        <div
          key={user.id}
          className="user"
        >{`${user.name} - ${user.age} років`}</div>
      ))}
    </div>
  );
};
export default User;
