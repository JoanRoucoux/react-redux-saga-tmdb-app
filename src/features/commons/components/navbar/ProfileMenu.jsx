import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material';
import {
  AccountCircle as AccountCircleIcon,
  Favorite as FavoriteIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { SessionUtils } from '../..';
import LogoutButton from './LogoutButton';

const {
  retrieveSessionId,
} = SessionUtils;

const ProfileMenu = () => {
  const isLoggedIn = retrieveSessionId();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? 'profile-popover' : undefined;

  return (
    <>
      {isLoggedIn ? (
        <>
          <IconButton
            aria-describedby={id}
            color="inherit"
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: 240,
              },
            }}
          >
            <Box sx={{ marginTop: 2 }}>
              <ListItem
                button
                component="a"
                href="/app/account/details"
              >
                <ListItemIcon
                  sx={{
                    minWidth: 'auto',
                    marginRight: 2,
                  }}
                >
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                  >
                    Account
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                component="a"
                href="/app/account/favorites"
              >
                <ListItemIcon
                  sx={{
                    minWidth: 'auto',
                    marginRight: 2,
                  }}
                >
                  <FavoriteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                  >
                    Favorites
                  </Typography>
                </ListItemText>
              </ListItem>
            </Box>
            <Box sx={{ padding: 2 }}>
              <LogoutButton />
            </Box>
          </Popover>
        </>
      ) : (
        <Button
          color="inherit"
          href="/login"
        >
          Login
        </Button>
      )}
    </>
  );
};

export default ProfileMenu;
