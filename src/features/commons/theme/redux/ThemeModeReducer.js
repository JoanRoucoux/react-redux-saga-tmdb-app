import { Matcher } from '../../../../core';
import ThemeActionTypes from './ThemeActionTypes';

const LIGHT_THEME_MODE = 'light';
const DARK_THEME_MODE = 'dark';

// reducer initial state
const initialState = {
  themeMode: DARK_THEME_MODE,
};

const ThemeModeReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === ThemeActionTypes.SET_LIGHT_THEME_MODE,
    () => ({
      ...state,
      themeMode: LIGHT_THEME_MODE,
    }),
  )
  .on(
    () => action.type === ThemeActionTypes.RESET_THEME_MODE,
    () => ({
      ...state,
      themeMode: initialState.themeMode,
    }),
  )
  .otherwise(() => state);

export default ThemeModeReducer;
