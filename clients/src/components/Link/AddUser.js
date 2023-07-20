import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postData } from "../services/api";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: null,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const handleClick = async () => {
    // alert(JSON.stringify(user, null, 2));
    await postData(user);
  };

  return (
    <>
      <input onChange={handleChange} placeholder="Name" name="name" />
      <br />
      <input onChange={handleChange} placeholder="username" name="username" />
      <br />
      <input onChange={handleChange} placeholder="email" name="email" />
      <br />
      <input onChange={handleChange} placeholder="phone" name="phone" />
      <br />
      <Link to="/showuser"><button onClick={handleClick}>Submit</button></Link>
    </>
  );
};

export default AddUser;
