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

const lightTheme: ThemeState = {
  dark: false,
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    background: '#ffffff',
    primary: 'red',
    card: 'rose',
    text: 'pink',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_dark_theme':
      return {...lightTheme};

    case 'set_light_theme':
      return {...lightTheme};
    default:
      return state;
  }
};
