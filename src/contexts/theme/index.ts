import { ActionType } from "..";
import { THEME_CHECK, THEME_TKN, THEME_TOGGLE } from "../../utils/strings";

const themeReducer = (state: string, action: ActionType) => {
  console.log("Reducer: ", action);
  switch (action.type) {
    case THEME_CHECK:
      const _theme = !!localStorage.getItem(THEME_TKN)
        ? localStorage.getItem(THEME_TKN)!.toLowerCase()
        : "Light";
      document.documentElement.setAttribute("theme", _theme);
      localStorage.setItem(THEME_TKN, _theme);
      return _theme;

    case THEME_TOGGLE:
      document.documentElement.setAttribute(
        "theme",
        action.payload.toLowerCase()
      );
      localStorage.setItem(THEME_TKN, action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
