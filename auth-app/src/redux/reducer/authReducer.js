import { User_Login } from "../action/actionType";

export const authReducer = (state, action) => {
  switch (action.type) {
    case User_Login:
      return {
        ...state,
        user: [...state, action.payload],
      };
    default:
      return (state = "user not login");
  }
};
