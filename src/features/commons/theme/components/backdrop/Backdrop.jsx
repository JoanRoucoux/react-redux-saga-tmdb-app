import React from 'react';
import {
  Backdrop as MuiBackdrop,
  CircularProgress,
} from '@mui/material';

const Backdrop = () => (
  <MuiBackdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open
  >
    <CircularProgress color="inherit" />
  </MuiBackdrop>
);

export default Backdrop;
