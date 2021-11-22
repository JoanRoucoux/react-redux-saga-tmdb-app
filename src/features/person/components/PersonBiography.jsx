import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material';

const PersonBiography = ({ details }) => {
  const {
    name,
    biography,
  } = details || {};

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h1"
        >
          {details ? name : <Skeleton />}
        </Typography>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="body1"
        >
          {details ? biography : <Skeleton />}
        </Typography>
      </CardContent>
    </Card>
  );
};

PersonBiography.propTypes = {
  details: PropTypes.any,
};

PersonBiography.defaultProps = {
  details: null,
};

export default PersonBiography;
