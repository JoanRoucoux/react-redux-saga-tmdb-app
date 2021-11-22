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
  MoviePopularFragment,
} = MovieProvider;

@withRouter
@withTitle('Popular Movies')
@Reduxify((state) => ({
  // define state to extract
  ...MoviePopularFragment(state),
}), {
  // define actions to execute
  ...MovieDispatcher,
})
class MoviePopularPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchMoviePopular();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchMoviePopular(params.pageNumber);
    }
  }

  fetchMoviePopular = () => {
    const {
      params,
      requestMoviePopular,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestMoviePopular({ pageNumber });
  };

  render() {
    const {
      moviePopularResults,
      moviePopularCurrentPage,
      moviePopularTotalPages,
      moviePopularTotalResults,
      moviePopularLoading,
      moviePopularError,
    } = this.props;

    console.log('[MoviePopularPage] Display props:', {
      moviePopularResults,
      moviePopularCurrentPage,
      moviePopularTotalPages,
      moviePopularTotalResults,
      moviePopularLoading,
      moviePopularError,
    });

    return (
      <>
        <Header title="Popular Movies" />
        {(moviePopularError && (
          <ApiError />
        ))
        || (
          <>
            <MovieList
              loading={moviePopularLoading}
              results={moviePopularResults}
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

export default MoviePopularPage;
