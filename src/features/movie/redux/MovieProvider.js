const MovieDetailsFragment = (state) => ({
  movieDetails: state?.MovieDetails?.movieDetails,
  movieDetailsLoading: state?.MovieDetails?.loading,
  movieDetailsError: state?.MovieDetails?.error,
});

const MovieNowPlayingFragment = (state) => ({
  movieNowPlayingResults: state?.MovieNowPlaying?.movieNowPlayingResults,
  movieNowPlayingCurrentPage: state?.MovieNowPlaying?.movieNowPlayingCurrentPage,
  movieNowPlayingTotalPages: state?.MovieNowPlaying?.movieNowPlayingTotalPages,
  movieNowPlayingTotalResults: state?.MovieNowPlaying?.movieNowPlayingTotalResults,
  movieNowPlayingLoading: state?.MovieNowPlaying?.loading,
  movieNowPlayingError: state?.MovieNowPlaying?.error,
});

const MoviePopularFragment = (state) => ({
  moviePopularResults: state?.MoviePopular?.moviePopularResults,
  moviePopularCurrentPage: state?.MoviePopular?.moviePopularCurrentPage,
  moviePopularTotalPages: state?.MoviePopular?.moviePopularTotalPages,
  moviePopularTotalResults: state?.MoviePopular?.moviePopularTotalResults,
  moviePopularLoading: state?.MoviePopular?.loading,
  moviePopularError: state?.MoviePopular?.error,
});

const MovieTopRatedFragment = (state) => ({
  movieTopRatedResults: state?.MovieTopRated?.movieTopRatedResults,
  movieTopRatedCurrentPage: state?.MovieTopRated?.movieTopRatedCurrentPage,
  movieTopRatedTotalPages: state?.MovieTopRated?.movieTopRatedTotalPages,
  movieTopRatedTotalResults: state?.MovieTopRated?.movieTopRatedTotalResults,
  movieTopRatedLoading: state?.MovieTopRated?.loading,
  movieTopRatedError: state?.MovieTopRated?.error,
});

const MovieUpcomingFragment = (state) => ({
  movieUpcomingResults: state?.MovieUpcoming?.movieUpcomingResults,
  movieUpcomingCurrentPage: state?.MovieUpcoming?.movieUpcomingCurrentPage,
  movieUpcomingTotalPages: state?.MovieUpcoming?.movieUpcomingTotalPages,
  movieUpcomingTotalResults: state?.MovieUpcoming?.movieUpcomingTotalResults,
  movieUpcomingLoading: state?.MovieUpcoming?.loading,
  movieUpcomingError: state?.MovieUpcoming?.error,
});

const MovieProvider = {
  MovieDetailsFragment,
  MovieNowPlayingFragment,
  MoviePopularFragment,
  MovieTopRatedFragment,
  MovieUpcomingFragment,
};

export default MovieProvider;
