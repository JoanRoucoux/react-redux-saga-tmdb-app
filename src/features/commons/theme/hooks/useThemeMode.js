import { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import ThemeModes from '../constants/ThemeModes';
import ThemeActionTypes from '../redux/ThemeActionTypes';

const {
  DARK,
  LIGHT,
} = ThemeModes;

const {
  SET_DARK_THEME_MODE,
  RESET_THEME_MODE,
} = ThemeActionTypes;

const useThemeMode = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state?.ThemeMode?.themeMode);

  const toggleThemeMode = () => {
    if (themeMode === LIGHT) {
      window.localStorage.setItem('theme', DARK);
      dispatch({ type: SET_DARK_THEME_MODE });
    } else {
      window.localStorage.setItem('theme', LIGHT);
      dispatch({ type: RESET_THEME_MODE });
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme && localTheme === DARK) {
      dispatch({ type: SET_DARK_THEME_MODE });
    }
  }, []);

  return {
    toggleThemeMode,
  };
};

export default useThemeMode;
