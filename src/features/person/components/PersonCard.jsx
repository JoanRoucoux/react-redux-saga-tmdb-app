import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';

const PersonCard = ({ person }) => {
  const navigate = useNavigate();
  const handleOnDetails = (personId) => navigate(`../${personId}`);
  const {
    id,
    knownFor,
    name,
    profilePath,
    responsiveProfilePath,
  } = person || {};

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardActionArea
        onClick={() => handleOnDetails(id)}
        style={{
          padding: 16,
        }}
      >
        {person ? (
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
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {person ? name : <Skeleton />}
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
          >
            {person ? knownFor : <Skeleton />}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PersonCard.propTypes = {
  person: PropTypes.any,
};

PersonCard.defaultProps = {
  person: null,
};

export default PersonCard;
