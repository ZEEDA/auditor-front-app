import { createContext, useReducer, useState } from "react";
import auth from "../api/auth";
import { User } from "../models/user";
import authReducer from "./auth";

export type ActionType = {
  type: string;
  payload: any;
};
export type AuthReducerType = {
  token: string | null | undefined;
  userData: User | null | undefined;
};
export type StateType = {
  auth: AuthReducerType;
};

const initialState = {
  auth: {
    token: undefined,
    userData: undefined,
  },
};

const AppContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: (action: ActionType) => null });

const mainReducer = (state: StateType, action: ActionType) => {
  console.log("In main Reducer Function");

  return {
    auth: authReducer(state.auth, action),
  };
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
