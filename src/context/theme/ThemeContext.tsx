import React, {createContext, useReducer} from 'react';
import {lightTheme, themeReducer, ThemeState} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState; //todo
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme); //TODO: leer el tema global del dispositivo

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };
  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
