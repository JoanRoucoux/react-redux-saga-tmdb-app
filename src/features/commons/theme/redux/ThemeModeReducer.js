import { Matcher } from '../../../../core';
import ThemeModes from '../constants/ThemeModes';
import ThemeActionTypes from './ThemeActionTypes';

const {
  DARK,
  LIGHT,
} = ThemeModes;

const initialState = {
  themeMode: LIGHT,
};

const ThemeModeReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === ThemeActionTypes.SET_DARK_THEME_MODE,
    () => ({
      ...state,
      themeMode: DARK,
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
