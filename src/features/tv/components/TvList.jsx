import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { FPUtils } from '../../../core';
import { TvConfig } from '../commons';
import MovieCard from './TvCard';

const {
  isDefined,
} = FPUtils;

const {
  formatMovieList,
} = TvConfig;

const TvList = ({
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

TvList.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array,
};

TvList.defaultProps = {
  loading: false,
  results: null,
};

export default TvList;
