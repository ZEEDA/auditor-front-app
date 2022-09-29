import { ActionType, AuthReducerType } from "..";
import { AUTH_CHECK, SIGN_IN, SIGN_OUT, ST_TKN } from "../../utils/strings";

const authReducer = (state: AuthReducerType, action: ActionType) => {
  console.log("Reducer: ", action);
  switch (action.type) {
    case AUTH_CHECK:
      return {
        ...state,
        ...{token: localStorage.getItem(ST_TKN)}
      };
    case SIGN_IN:
      localStorage.setItem(ST_TKN, action.payload.token);
      return {
        token: action.payload.token,
        userData: action.payload.user,
      };
    case SIGN_OUT:
      localStorage.removeItem(ST_TKN);
      return {
        token: null,
        userData: null,
      };

    default:
      return state;
  }
};

export default authReducer;
