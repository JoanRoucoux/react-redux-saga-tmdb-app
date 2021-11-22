import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { FPUtils } from '../../../core';
import { MovieConfig } from '../commons';
import MovieCard from './MovieCard';

const {
  isDefined,
} = FPUtils;

const {
  formatMovieList,
} = MovieConfig;

const MovieList = ({
  loading,
  results,
}) => {
  const formattedMovieList = formatMovieList(results);

  return (
    <Grid
      container
      spacing={3}
    >
      {((loading || !isDefined(formattedMovieList)) ? Array.from(new Array(20)) : formattedMovieList)
        .map((movie) => (
          <Grid
            key={uuidv4()}
            item
            lg={3}
            md={6}
            xs={12}
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}
    </Grid>
  );
};

MovieList.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array,
};

MovieList.defaultProps = {
  loading: false,
  results: null,
};

export default MovieList;
