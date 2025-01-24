import React, { createContext, useReducer } from "react";

type stateType = {
  theme: string;
  fontSize: number;
};

type actionType =
  | { type: "change_theme" }
  | { type: "change_fontSize"; payload: number };

const initialState: stateType = {
  theme: "light",
  fontSize: 16,
};

export const themeContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "change_theme":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "change_fontSize":
      return {
        ...state,
        fontSize: action.payload,
      };
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
