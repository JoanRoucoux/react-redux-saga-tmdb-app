import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  IconButton,
  Tooltip,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeActionTypes } from '../../theme';

const {
  SET_LIGHT_THEME_MODE,
  RESET_THEME_MODE,
} = ThemeActionTypes;

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state?.ThemeMode?.themeMode);
  const getThemeModeIcon = () => (themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />);
  const handleToggleTheme = () => dispatch({ type: themeMode === 'dark' ? SET_LIGHT_THEME_MODE : RESET_THEME_MODE });

  return (
    <Tooltip title={t('Toggle light/dark theme')}>
      <IconButton
        aria-label={t('Toggle light/dark theme')}
        color="inherit"
        onClick={handleToggleTheme}
      >
        {getThemeModeIcon()}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;
