import { useEffect, useState } from "react";
import { deleteUser } from "../services/api";
import { Link } from "react-router-dom";


const ShowUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const data = await fetch("http://127.0.0.1:8080/api/user");
    const json = await data.json();
    setData(json.data[0].user);
    console.log(json.data[0].user);
  };

  const handleDelete = async ({ id }) => {
    await deleteUser(id);
    dataFetch();
    console.log(id);
  };

  const handleEdit = ({ id }) => {
    console.log(id);
  };

  return (
    <>
      <div className="flex justify-center h-full">
        <div>
          <div className="flex justify-center">
            <h1 className="text-2xl font-serif font-bold mt-4">Show User</h1>
          </div>
          <div className="mt-10">
            <table className="border-separate border-spacing-2 border border-red-100 table-fixed bg-red-300">
              <thead className="border-collapse border border-red-100">
                <tr className="border-collapse border border-red-100">
                  <th className="border-collapse border border-red-100">
                    Name
                  </th>
                  <th className="border-collapse border border-red-100">
                    User_Name
                  </th>
                  <th className="border-collapse border border-red-100">
                    Email
                  </th>
                  <th className="border-collapse border border-red-100">
                    Phone
                  </th>
                  <th className="border-collapse border border-red-100">
                    Edit
                  </th>
                  <th className="border-collapse border border-red-100">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="border-collapse border border-red-100">
                {data.map((num, key) => (
                  <tr className="border-collapse border border-red-100">
                    <td className="border-collapse border border-red-100">
                      {num.name}
                    </td>
                    <td className="border-collapse border border-red-100">
                      {num.username}
                    </td>
                    <td className="border-collapse border border-red-100">
                      {num.email}
                    </td>
                    <td className="border-collapse border border-red-100">
                      {num.phone}
                    </td>
                    <td className="ml-10 border-collapse border border-red-100">
                      <Link to={"/edit/" + num._id}>
                        <button onClick={() => handleEdit({ id: num._id })}>
                          Edit
                          
                        </button>
                      </Link>
                    </td>
                    <td className="ml-10 border-collapse border border-red-100">
                      <button onClick={() => handleDelete({ id: num._id })}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
