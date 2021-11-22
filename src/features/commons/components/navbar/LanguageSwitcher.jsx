import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TranslateIcon from '@mui/icons-material/Translate';
import i18n from '../../../../settings/i18n/i18n';

const languages = [
  {
    iso6391code: 'en',
    name: 'english',
  },
  {
    iso6391code: 'fr',
    name: 'french',
  },
  {
    iso6391code: 'es',
    name: 'spanish',
  },
];

const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const { t } = useTranslation();

  const handleMenuItemClick = ({
    iso6391code,
    index,
  }) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    i18n.changeLanguage(iso6391code);
  };
  const handleClose = () => setAnchorEl(null);
  const handleTooltip = (bool) => setTooltipOpen(bool);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleTooltip(false);
  };

  return (
    <Tooltip
      title={t('Change language')}
      open={tooltipOpen}
    >
      <Box>
        <Button
          color="inherit"
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleClick}
          onMouseEnter={() => { handleTooltip(true); }}
          onMouseLeave={() => { handleTooltip(false); }}
        >
          <TranslateIcon />
          <Box
            component="span"
            ml={1}
            mr={0.5}
          >
            {languages[selectedIndex].name}
          </Box>
          <ExpandMoreIcon fontSize="small" />
        </Button>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {languages.map((language, index) => (
            <MenuItem
              key={`item-${language.name}`}
              disabled={index === selectedIndex}
              onClick={() => handleMenuItemClick({
                iso6391code: language.iso6391code,
                index,
              })}
            >
              {language.name}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Tooltip>
  );
};

export default LanguageSwitcher;
