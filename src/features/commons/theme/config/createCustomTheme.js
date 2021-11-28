import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import typography from './typography';

const createCustomTheme = (themeMode) => createTheme({
  palette: {
    mode: themeMode,
  },
  shape: {
    borderRadius: 16,
  },
  shadows,
  typography,
});

export default createCustomTheme;
