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
      <h1>Show User</h1>
      <div>
        {data.map((data, index) => {
          return (
            <div key={index}>
              <p>
                <span className="margin">{data.name}</span>
                <span className="margin">{data.username}</span>
                <span className="margin">{data.email}</span>
                <span className="margin">{data.phone}</span>

                <Link to={"/edit/"+data._id}>
                  <button onClick={() => handleEdit({ id: data._id })}>
                    Edit
                  </button>
                </Link>
                <button onClick={() => handleDelete({ id: data._id })}>
                  Delete
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowUser;
