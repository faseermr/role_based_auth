import axios from "axios";

const API_URL = "http://localhost:4000/auth/";

const register = (username, email, password, roles) => {
  return axios
    .post(API_URL + "signup", {
      username,
      email,
      roles,
      password,
    })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      //console.log(err);
      return Promise.reject(err.response);
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      // console.log(response.data);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(err.response);
      return Promise.reject(err.response);
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
