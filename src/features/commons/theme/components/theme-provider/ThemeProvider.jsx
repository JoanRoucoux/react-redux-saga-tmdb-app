import React, { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import createCustomTheme from '../../config/createCustomTheme';
import GlobalStyles from '../global-styles/GlobalStyles';

const ThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state?.ThemeMode?.themeMode);
  const theme = useMemo(() => createCustomTheme(themeMode), [themeMode]);

  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<div />}>
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
