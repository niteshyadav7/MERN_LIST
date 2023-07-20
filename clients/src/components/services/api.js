import axios from "axios";

const usersUrl = "http://127.0.0.1:8080/api/user";

export const postData = async (user) => {
  return await axios.post(`${usersUrl}`, user);
};

export const getAllData = async () => {
  return await axios.get(`${usersUrl}`);
};
