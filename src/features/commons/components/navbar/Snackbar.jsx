import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Snackbar as MuiSnackbar,
} from '@mui/material';

const Snackbar = ({
  message,
  severity,
  show,
}) => {
  const [open, setOpen] = useState(show);

  useEffect(() => {
    setOpen(true);
  }, [show]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  show: PropTypes.bool,
};

Snackbar.defaultProps = {
  show: false,
};

export default Snackbar;
