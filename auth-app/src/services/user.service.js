import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/users/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getStudentContent = () => {
  return axios.get(API_URL + "student", { headers: authHeader() });
};

const getTeacherContent = () => {
  return axios.get(API_URL + "teacher", { headers: authHeader() });
};

const getAdminContent = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getTeacherContent,
  getStudentContent,
  getAdminContent,
};
