const AccountDetailsFragment = (state) => ({
  personPopularResults: state?.PersonPopular?.personPopularResults,
  personPopularCurrentPage: state?.PersonPopular?.personPopularCurrentPage,
  personPopularTotalPages: state?.PersonPopular?.personPopularTotalPages,
  personPopularTotalResults: state?.PersonPopular?.personPopularTotalResults,
  personPopularLoading: state?.PersonPopular?.loading,
  personPopularError: state?.PersonPopular?.error,
});

const AccountFavoriteMoviesFragment = (state) => ({
  personPopularResults: state?.PersonPopular?.personPopularResults,
  personPopularCurrentPage: state?.PersonPopular?.personPopularCurrentPage,
  personPopularTotalPages: state?.PersonPopular?.personPopularTotalPages,
  personPopularTotalResults: state?.PersonPopular?.personPopularTotalResults,
  personPopularLoading: state?.PersonPopular?.loading,
  personPopularError: state?.PersonPopular?.error,
});

const AccountFavoriteTvFragment = (state) => ({
  personPopularResults: state?.PersonPopular?.personPopularResults,
  personPopularCurrentPage: state?.PersonPopular?.personPopularCurrentPage,
  personPopularTotalPages: state?.PersonPopular?.personPopularTotalPages,
  personPopularTotalResults: state?.PersonPopular?.personPopularTotalResults,
  personPopularLoading: state?.PersonPopular?.loading,
  personPopularError: state?.PersonPopular?.error,
});

const AccountWatchlistMoviesFragment = (state) => ({
  personPopularResults: state?.PersonPopular?.personPopularResults,
  personPopularCurrentPage: state?.PersonPopular?.personPopularCurrentPage,
  personPopularTotalPages: state?.PersonPopular?.personPopularTotalPages,
  personPopularTotalResults: state?.PersonPopular?.personPopularTotalResults,
  personPopularLoading: state?.PersonPopular?.loading,
  personPopularError: state?.PersonPopular?.error,
});

const AccountWatchlistTvFragment = (state) => ({
  personPopularResults: state?.PersonPopular?.personPopularResults,
  personPopularCurrentPage: state?.PersonPopular?.personPopularCurrentPage,
  personPopularTotalPages: state?.PersonPopular?.personPopularTotalPages,
  personPopularTotalResults: state?.PersonPopular?.personPopularTotalResults,
  personPopularLoading: state?.PersonPopular?.loading,
  personPopularError: state?.PersonPopular?.error,
});

const AccountProvider = {
  AccountDetailsFragment,
  AccountFavoriteMoviesFragment,
  AccountFavoriteTvFragment,
  AccountWatchlistMoviesFragment,
  AccountWatchlistTvFragment,
};

export default AccountProvider;
