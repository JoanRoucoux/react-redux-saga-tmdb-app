import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconButton,
  Tooltip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const GithubButton = () => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t('tooltip.gitHubRepository')}>
      <IconButton
        aria-label={t('tooltip.gitHubRepository')}
        color="inherit"
        href="https://github.com/JoanRoucoux/react-redux-saga-tmdb-app"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
};

export default GithubButton;
