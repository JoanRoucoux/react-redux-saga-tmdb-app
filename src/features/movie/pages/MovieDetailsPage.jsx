import React, { Component } from 'react';
import { Reduxify } from '../../../core';
import {
  withRouter,
  withTitle,
} from '../../commons';
import { ApiError } from '../../commons/components';
import {
  MovieProvider,
  MovieDispatcher,
} from '../redux';

const {
  MovieDetailsFragment,
} = MovieProvider;

@withRouter
@withTitle('Movie details')
@Reduxify((state) => ({
  // define state to extract
  ...MovieDetailsFragment(state),
}), {
  // define actions to execute
  ...MovieDispatcher,
})
class MovieDetailsPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      params,
      requestMovieDetails,
    } = this.props;
    const {
      id: movieId,
    } = params;
    requestMovieDetails({ movieId });
  };

  render() {
    const {
      movieDetails,
      movieDetailsLoading,
      movieDetailsError,
    } = this.props;

    console.log('[MovieDetailsPage] Display props:', {
      movieDetails,
      movieDetailsLoading,
      movieDetailsError,
    });

    return (
      <>
        {(movieDetailsError && (
          <ApiError />
        ))
        || (
          <p>
            Je suis MovieDetailsPage
          </p>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
