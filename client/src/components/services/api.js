import axios from "axios";

const URL = "http://127.0.0.1:8080/api/user";

export const postData = async (user) => {
  try {
    await axios.post(`${URL}`, user);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (id) => {
    return await axios.delete(`${URL}/${id}`);
}


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${URL}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${URL}/${id}`, user)
}