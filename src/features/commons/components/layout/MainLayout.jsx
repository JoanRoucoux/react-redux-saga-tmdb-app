import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Container,
  experimentalStyled as styled,
} from '@mui/material';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  }),
);

const MainLayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  }),
);

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const MainLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

const MainLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <MainLayoutRoot>
      <Navbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <Box
              sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 8,
              }}
            >
              <Container maxWidth={false}>
                <Outlet />
                <Footer />
              </Container>
            </Box>
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
};

export default MainLayout;
