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
  MovieUpcomingFragment,
} = MovieProvider;

@withRouter
@withTitle('Upcoming Movies')
@Reduxify((state) => ({
  // define state to extract
  ...MovieUpcomingFragment(state),
}), {
  // define actions to execute
  ...MovieDispatcher,
})
class MovieUpcomingPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchMovieUpcoming();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchMovieUpcoming(params.pageNumber);
    }
  }

  fetchMovieUpcoming = () => {
    const {
      params,
      requestMovieUpcoming,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestMovieUpcoming({ pageNumber });
  };

  render() {
    const {
      movieUpcomingResults,
      movieUpcomingCurrentPage,
      movieUpcomingTotalPages,
      movieUpcomingTotalResults,
      movieUpcomingLoading,
      movieUpcomingError,
    } = this.props;

    console.log('[MovieUpcomingPage] Display props:', {
      movieUpcomingResults,
      movieUpcomingCurrentPage,
      movieUpcomingTotalPages,
      movieUpcomingTotalResults,
      movieUpcomingLoading,
      movieUpcomingError,
    });

    return (
      <>
        <Header title="Upcoming Movies" />
        {(movieUpcomingError && (
          <ApiError />
        ))
        || (
          <>
            <MovieList
              loading={movieUpcomingLoading}
              results={movieUpcomingResults}
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

export default MovieUpcomingPage;
