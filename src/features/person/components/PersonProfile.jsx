import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import { FPUtils } from '../../../core';
import { PersonConfig } from '../commons';

const {
  isDefined,
} = FPUtils;

const {
  formatPersonProfile,
} = PersonConfig;

const PersonProfile = ({
  details,
  loading,
}) => {
  const {
    alsoKnownAsList,
    imdbId,
    name,
    profilePath,
    responsiveProfilePath,
  } = formatPersonProfile(details) || {};

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      {details ? (
        <CardMedia
          component="img"
          alt={name}
          image={profilePath}
          srcSet={responsiveProfilePath}
          style={{
            borderRadius: 16,
          }}
        />
      ) : (
        <Skeleton
          variant="rect"
          height={235}
        />
      )}
      <CardContent
        style={{
          marginTop: 16,
          padding: 0,
        }}
      >
        <Box>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            Also Known As
          </Typography>
          {((loading || !isDefined(alsoKnownAsList)) ? Array.from(new Array(4)) : alsoKnownAsList)
            .map((alsoKnownAs) => (
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {alsoKnownAs || <Skeleton />}
              </Typography>
            ))}
        </Box>
        <Box
          style={{
            marginTop: 16,
          }}
        >
          <Typography
            color="textPrimary"
            variant="h4"
          >
            IMDb Profile
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              pt: 1,
            }}
          >
            <Button
              color="primary"
              component="a"
              href={`https://www.imdb.com/name/${imdbId}`}
              variant="outlined"
            >
              Go to IMDb Profile
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

PersonProfile.propTypes = {
  details: PropTypes.any,
  loading: PropTypes.bool,
};

PersonProfile.defaultProps = {
  details: null,
  loading: false,
};

export default PersonProfile;
