import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import {
  ThemeModes,
  useThemeMode,
} from '../../theme';

const { DARK } = ThemeModes;

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const { toggleThemeMode } = useThemeMode();
  const themeMode = useSelector((state) => state?.ThemeMode?.themeMode);
  const getThemeModeIcon = () => (themeMode === DARK ? <Brightness7Icon /> : <Brightness4Icon />);

  return (
    <Tooltip title={t('tooltip.toggleTheme')}>
      <IconButton
        aria-label={t('tooltip.toggleTheme')}
        color="inherit"
        onClick={toggleThemeMode}
      >
        {getThemeModeIcon()}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;
