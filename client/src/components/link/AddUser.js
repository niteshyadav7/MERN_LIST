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
    await postData(user);
  };

  return (
    <div className="flex justify-center h-full">
      <div>
        <h1 className="text-2xl font-serif font-bold mt-10">Add User</h1>
        <p className="mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={name}
            name="name"
            placeholder="Enter Your Name"
          />
        </p>
        <p className="mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={username}
            name="username"
            placeholder="Enter Your username"
          />
        </p>
        <p className="mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={email}
            name="email"
            placeholder="Enter Your Email"
          />
        </p>
        <p className="mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={phone}
            name="phone"
            placeholder="Enter Your Phone"
          />
        </p>
        <p className="mt-4">
          <Link to="/show">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              Submit
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AddUser;
