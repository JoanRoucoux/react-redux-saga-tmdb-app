import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import Backdrop from '../backdrop/Backdrop';
import GlobalStyles from '../global-styles/GlobalStyles';
import shadows from '../../shadows';
import typography from '../../typography';

const ThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state?.ThemeMode?.themeMode);
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    shape: {
      borderRadius: 16,
    },
    shadows,
    typography,
  });

  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<Backdrop />}>
        {children}
      </Suspense>
    </MUIThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
