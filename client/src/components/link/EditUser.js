import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteUser, editUser } from "../services/api";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [data, setData] = useState(initialValue);
  const { name, username, email, phone } = data;

  const { id } = useParams();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dataFetch()
  }, []);

  const dataFetch = async () => {
    const data = await fetch(`http://127.0.0.1:8080/api/user/${id}`);
    const json = await data.json();
    setData(json.data[0].user)
    console.log(json.data[0].user);
  };

  const handleClick = async () => {
    await editUser(id, data);
  };

  return (
    <>
      <h1>Edit User</h1>
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
          <button onClick={handleClick}>Edit Button</button>
        </Link>
      </p>
    </>
  );
};
export default EditUser;
