import authService from "../../services/auth.service";
import userService from "../../services/user.service";
import {
  Get_Home_Content,
  Get_Admin_Content,
  Get_Student_Content,
  Get_Teacher_Content,
  User_Login,
} from "./actionType";

// get public content
export const getHomeContent = () => async (dispatch) => {
  try {
    const res = await userService.getPublicContent();
    //  console.log(res);
    dispatch({
      type: Get_Home_Content,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// get student content
export const getStudentContent = () => async (dispatch) => {
  try {
    const res = await userService.getStudentContent();

    dispatch({
      type: Get_Student_Content,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// get teacher content
export const getTeacherContent = () => async (dispatch) => {
  try {
    const res = await userService.getTeacherContent();

    dispatch({
      type: Get_Teacher_Content,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// get admin content
export const getAdminContent = () => async (dispatch) => {
  try {
    const res = await userService.getAdminContent();

    dispatch({
      type: Get_Admin_Content,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// get login
export const loginAction = (username, password) => async (dispatch) => {
  try {
    //console.log(username, password);
    const res = await authService.login(username, password);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch({
      type: User_Login,
      payload: res,
    });
    return Promise.resolve(res);
    //console.log(res);
  } catch (err) {
    console.log(err);
  }
};
