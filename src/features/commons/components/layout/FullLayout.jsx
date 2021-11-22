import React from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material';
import Navbar from '../navbar/Navbar';

const FullLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  }),
);

const FullLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
});

const FullLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const FullLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

const FullLayout = () => (
  <FullLayoutRoot>
    <Navbar />
    <FullLayoutWrapper>
      <FullLayoutContainer>
        <FullLayoutContent>
          <Outlet />
        </FullLayoutContent>
      </FullLayoutContainer>
    </FullLayoutWrapper>
  </FullLayoutRoot>
);

export default FullLayout;
