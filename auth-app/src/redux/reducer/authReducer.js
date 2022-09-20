import { User_Login, User_Register } from "../action/actionType";

export const authReducer = (state, action) => {
  switch (action.type) {
    case User_Login:
      return {
        ...state,
        user: [...state, action.payload],
      };

    case User_Register:
      return {
        ...state,
      };

    default:
      return (state = "user not login");
  }
};
