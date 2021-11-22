import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Skeleton,
  Typography,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const TvCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleOnDetails = (movieId) => navigate(`../${movieId}`);
  const {
    id,
    title,
    posterPath,
    responsivePosterPath,
    releaseDate,
    voteAverage,
  } = movie || {};

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
        {movie ? (
          <CardMedia
            component="img"
            alt={title}
            image={posterPath}
            srcSet={responsivePosterPath}
            style={{
              borderRadius: 16,
            }}
          />
        ) : (
          <Skeleton
            variant="rect"
            height={330}
          />
        )}
        <CardContent
          style={{
            marginTop: 16,
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              '& > *': {
                margin: 0.5,
              },
            }}
          >
            {movie ? (
              <Chip label={releaseDate} variant="outlined" size="small" icon={<EventIcon />} />
            ) : (
              <Skeleton width="30%" />
            )}
          </Box>
          <Typography
            textAlign="center"
            color="textPrimary"
            variant="h5"
            style={{
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {movie ? title : <Skeleton />}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {movie ? (
              <>
                <Typography
                  color="textSecondary"
                  component="div"
                  variant="subtitle1"
                  style={{
                    marginRight: 4,
                  }}
                >
                  {voteAverage}
                </Typography>
                <Rating
                  name="read-only"
                  value={voteAverage}
                  readOnly
                  size="small"
                />
              </>
            ) : (
              <Skeleton width="70%" />
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

TvCard.propTypes = {
  movie: PropTypes.any,
};

TvCard.defaultProps = {
  movie: null,
};

export default TvCard;
