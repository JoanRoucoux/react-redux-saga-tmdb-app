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
  MovieNowPlayingFragment,
} = MovieProvider;

@withRouter
@withTitle('Now Playing Movies')
@Reduxify((state) => ({
  // define state to extract
  ...MovieNowPlayingFragment(state),
}), {
  // define actions to execute
  ...MovieDispatcher,
})
class MovieNowPlayingPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchMovieNowPlaying();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchMovieNowPlaying(params.pageNumber);
    }
  }

  fetchMovieNowPlaying = () => {
    const {
      params,
      requestMovieNowPlaying,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestMovieNowPlaying({ pageNumber });
  };

  render() {
    const {
      movieNowPlayingResults,
      movieNowPlayingCurrentPage,
      movieNowPlayingTotalPages,
      movieNowPlayingTotalResults,
      movieNowPlayingLoading,
      movieNowPlayingError,
    } = this.props;

    console.log('[MovieNowPlayingPage] Display props:', {
      movieNowPlayingResults,
      movieNowPlayingCurrentPage,
      movieNowPlayingTotalPages,
      movieNowPlayingTotalResults,
      movieNowPlayingLoading,
      movieNowPlayingError,
    });

    return (
      <>
        <Header title="Now Playing Movies" />
        {(movieNowPlayingError && (
          <ApiError />
        ))
        || (
          <>
            <MovieList
              loading={movieNowPlayingLoading}
              results={movieNowPlayingResults}
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

export default MovieNowPlayingPage;
