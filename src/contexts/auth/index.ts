import { ActionType, AuthReducerType } from "..";
import { SIGN_IN } from "../../utils/strings";

const authReducer = (state: AuthReducerType, action: ActionType) => {
  console.log("Reducer: ", action);
  switch (action.type) {
    case SIGN_IN:
      return {
        token: action.payload.token,
        userData: action.payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
