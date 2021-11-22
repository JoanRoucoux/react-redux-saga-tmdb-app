import React, { Component } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Reduxify } from '../../../core';
import {
  withRouter,
  withTitle,
} from '../../commons';
import {
  ApiError,
  Header,
} from '../../commons/components';
import {
  MovieProvider,
  MovieDispatcher,
} from '../redux';
import MovieList from '../components/MovieList';

const {
  MovieTopRatedFragment,
} = MovieProvider;

@withRouter
@withTitle('Top Rated Movies')
@Reduxify((state) => ({
  // define state to extract
  ...MovieTopRatedFragment(state),
}), {
  // define actions to execute
  ...MovieDispatcher,
})
class MovieTopRatedPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchMovieTopRated();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchMovieTopRated(params.pageNumber);
    }
  }

  fetchMovieTopRated = () => {
    const {
      params,
      requestMovieTopRatedr,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestMovieTopRatedr({ pageNumber });
  };

  render() {
    const {
      movieTopRatedResults,
      movieTopRatedCurrentPage,
      movieTopRatedTotalPages,
      movieTopRatedTotalResults,
      movieTopRatedLoading,
      movieTopRatedError,
    } = this.props;

    console.log('[MovieTopRatedPage] Display props:', {
      movieTopRatedResults,
      movieTopRatedCurrentPage,
      movieTopRatedTotalPages,
      movieTopRatedTotalResults,
      movieTopRatedLoading,
      movieTopRatedError,
    });

    return (
      <>
        <Header title="Top Rated Movies" />
        {(movieTopRatedError && (
          <ApiError />
        ))
        || (
          <>
            <MovieList
              loading={movieTopRatedLoading}
              results={movieTopRatedResults}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3,
              }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ExpandMoreIcon />}
                onClick={() => {}}
                style={{
                  width: '30%',
                }}
              >
                Load more
              </Button>
            </Box>
          </>
        )}
      </>
    );
  }
}

export default MovieTopRatedPage;
