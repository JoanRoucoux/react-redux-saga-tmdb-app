import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
} from '@mui/material';

const Header = ({ title }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      mb: 3,
    }}
  >
    <Typography
      variant="h3"
      component="h1"
      color="textPrimary"
    >
      {title}
    </Typography>
  </Box>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
