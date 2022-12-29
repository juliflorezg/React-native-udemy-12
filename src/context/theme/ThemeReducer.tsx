import {Theme} from '@react-navigation/native';

type ThemeAction =
  | {
      type: 'set_light_theme';
    }
  | {
      type: 'set_dark_theme';
    };

export interface ThemeState extends Theme {
  currentTheme: 'dark' | 'light';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  dark: false,
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#ff6060',
    background: 'white',
    card: 'grey',
    text: '#400002',
    border: 'black',
    notification: '#ff9898',
  },
};

export const darkTheme: ThemeState = {
  dark: false,
  currentTheme: 'dark',
  dividerColor: 'rgba(108, 194, 255, 0.698)',
  colors: {
    primary: '#0089cd',
    background: '#000214',
    card: '#1073cf2d',
    text: '#b0e5ff',
    border: '#00aaff',
    notification: '#0076b1',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_dark_theme':
      return {...darkTheme};

    case 'set_light_theme':
      return {...lightTheme};
    default:
      return state;
  }
};
