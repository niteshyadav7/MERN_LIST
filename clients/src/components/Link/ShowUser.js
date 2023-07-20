import { useEffect, useState } from "react";
import {getAllData} from "../services/api";
const ShowUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data= await getAllData();
    // console.log(data.data.data[0].user);
    setData(data.data.data[0].user)
    
  };
  console.log(data);
  return (
    <>
      <div>
        {data.map((x,i)=>(
          <div>{x.name}</div>
          ))}
      </div>
    </>
  );
};

export default ShowUser;
