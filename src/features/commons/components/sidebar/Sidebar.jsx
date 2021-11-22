import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Drawer,
  List,
  ListSubheader,
  Typography,
} from '@mui/material';
import NavItem from './NavItem';

const sections = [
  {
    id: 'movie',
    subheader: 'Movies',
    items: [
      {
        id: 'popular',
        href: '/app/movie/popular',
        title: 'Popular',
      },
      {
        id: 'now-playing',
        href: '/app/movie/now-playing',
        title: 'Now Playing',
      },
      {
        id: 'upcoming',
        href: '/app/movie/upcoming',
        title: 'Upcoming',
      },
      {
        id: 'top-rated',
        href: '/app/movie/top-rated',
        title: 'Top Rated',
      },
    ],
  },
  {
    id: 'tv',
    subheader: 'TV Shows',
    items: [
      {
        id: 'popular',
        href: '/app/tv/popular',
        title: 'Popular',
      },
      {
        id: 'airing-today',
        href: '/app/tv/airing-today',
        title: 'Airing Today',
      },
      {
        id: 'on-the-air',
        href: '/app/tv/on-the-air',
        title: 'On TV',
      },
      {
        id: 'top-rated',
        href: '/app/tv/top-rated',
        title: 'Top Rated',
      },
    ],
  },
  {
    id: 'person',
    subheader: 'People',
    items: [
      {
        id: 'popular',
        href: '/app/person/popular',
        title: 'Popular People',
      },
    ],
  },
  {
    id: 'more',
    subheader: 'More',
    items: [
      {
        id: 'home',
        href: '/app/home',
        title: 'Home',
      },
      {
        id: 'login',
        href: '/login',
        title: 'Login',
      },
      {
        id: '404',
        href: '/404',
        title: 'Error',
      },
    ],
  },
];

const Sidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          {sections.map((section) => (
            <li key={`section-${section.id}`}>
              <ul>
                <ListSubheader
                  disableSticky
                  disableGutters
                >
                  {section.subheader}
                </ListSubheader>
                {section.items.map((item) => (
                  <NavItem
                    href={item.href}
                    key={`item-${section.id}-${item.id}`}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2,
          borderRadius: 1,
        }}
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Can&apos;t find a movie or TV show?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Login to create it.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2,
          }}
        >
          <Button
            color="primary"
            component="a"
            href="/login"
            variant="contained"
          >
            Join the community
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 256,
          },
        }}
        sx={{
          display: {
            lg: 'none',
            xs: 'block',
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        anchor="left"
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: 256,
            top: 64,
            height: 'calc(100% - 64px)',
          },
        }}
        sx={{
          display: {
            xs: 'none',
            lg: 'block',
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

Sidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false,
};

export default Sidebar;
