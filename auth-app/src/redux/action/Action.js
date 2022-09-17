import userService from "../../services/user.service";
import {
  Get_Home_Content,
  Get_Admin_Content,
  Get_Student_Content,
  Get_Teacher_Content,
} from "./actionType";

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
