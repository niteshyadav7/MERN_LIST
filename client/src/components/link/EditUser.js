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
    dataFetch();
  }, []);
 
  console.log(id);
  
  const dataFetch = async () => {
    const data = await fetch(`http://127.0.0.1:8080/api/user/${id}`);
    const json = await data.json();
    setData(json.data[0].user);
    console.log(json.data[0].user);
  };

  const handleClick = async () => {
    await editUser(id, data);
  };

  return (
    <>
      <div className="flex justify-center h-full">
        <div>
          <h1 className="text-2xl font-serif font-bold mt-10">Edit User</h1>
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
                Edit Button
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default EditUser;
