import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import SearchField from './SearchField';
import LanguageSwitcher from './LanguageSwitcher';
import ProfileMenu from './ProfileMenu';
import ThemeSwitcher from './ThemeSwitcher';
import GithubButton from './GithubButton';

const Navbar = ({ onMobileNavOpen }) => (
  <AppBar elevation={0}>
    <Toolbar>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{
        display: {
          lg: 'inline-flex',
          xs: 'none',
        },
        alignItems: 'center',
      }}
      >
        <SearchField />
        <LanguageSwitcher />
        <ProfileMenu />
        <ThemeSwitcher />
        <GithubButton />
      </Box>
      <IconButton
        color="inherit"
        onClick={onMobileNavOpen}
        sx={{
          display: {
            xs: 'block',
            lg: 'none',
          },
        }}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

Navbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

Navbar.defaultProps = {
  onMobileNavOpen: null,
};

export default Navbar;
