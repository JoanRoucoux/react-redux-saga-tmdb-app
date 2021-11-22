import { FPUtils } from '../../../../core';

const {
  isDefined,
} = FPUtils;

/**
 * Format movie list
 *
 * @param movieList List of movies
 * @returns {formatted person list}
 */
const formatMovieList = (movieList) => {
  if (isDefined(movieList)) {
    // Because data are coming from the MovieDB API,
    // we cannot fix the camelcase
    /* eslint-disable camelcase */
    return movieList.map((movie) => {
      const {
        id,
        title,
        poster_path,
        release_date,
        vote_average,
      } = movie || {};
      return {
        id,
        title,
        posterPath: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
        responsivePosterPath: poster_path && `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path} 1x,`
          + `https://image.tmdb.org/t/p/w440_and_h660_face${poster_path} 2x`,
        releaseDate: release_date,
        voteAverage: (vote_average / 2).toFixed(1),
      };
    });
  }
  return null;
};

const MovieConfig = {
  formatMovieList,
};

export default MovieConfig;
