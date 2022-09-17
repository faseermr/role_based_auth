import {
  Get_Home_Content,
  Get_Admin_Content,
  Get_Teacher_Content,
  Get_Student_Content,
} from "../action/actionType";

export const Reducer = (state, action) => {
  switch (action.type) {
    case Get_Home_Content:
      // console.log(action.payload);
      return {
        state: action.payload,
      };

    case Get_Admin_Content:
      return {
        state: action.payload,
      };
    case Get_Teacher_Content:
      return {
        state: action.payload,
      };
    case Get_Student_Content:
      return {
        state: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
