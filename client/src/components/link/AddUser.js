import { useState } from "react";
import { Link } from "react-router-dom";
import { postData } from "../services/api";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);

  const { name, username, email, phone } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
  await postData(user)
  alert("Data Send!🏆")
  };

  return (
    <>
      <h1>Add User</h1>
      <p>
        <input
          onChange={handleChange}
          value={name}
          name="name"
          placeholder="Enter Your Name"
        />
      </p>
      <p>
        <input
          onChange={handleChange}
          value={username}
          name="username"
          placeholder="Enter Your username"
        />
      </p>
      <p>
        <input
          onChange={handleChange}
          value={email}
          name="email"
          placeholder="Enter Your Email"
        />
      </p>
      <p>
        <input
          onChange={handleChange}
          value={phone}
          name="phone"
          placeholder="Enter Your Phone"
        />
      </p>
      <p>
        <Link to="/show">
          <button onClick={handleClick}>Submit</button>
        </Link>
      </p>
    </>
  );
};
export default AddUser;
