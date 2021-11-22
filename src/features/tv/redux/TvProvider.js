const TvAiringTodayFragment = (state) => ({
  tvAiringTodayResults: state?.TvAiringToday?.tvAiringTodayResults,
  tvAiringTodayCurrentPage: state?.TvAiringToday?.tvAiringTodayCurrentPage,
  tvAiringTodayTotalPages: state?.TvAiringToday?.tvAiringTodayTotalPages,
  tvAiringTodayTotalResults: state?.TvAiringToday?.tvAiringTodayTotalResults,
  tvAiringTodayLoading: state?.TvAiringToday?.loading,
  tvAiringTodayError: state?.TvAiringToday?.error,
});

const TvDetailsFragment = (state) => ({
  tvDetails: state?.TvDetails?.tvDetails,
  tvDetailsLoading: state?.TvDetails?.loading,
  tvDetailsError: state?.TvDetails?.error,
});

const TvOnTheAirFragment = (state) => ({
  tvOnTheAirResults: state?.TvOnTheAir?.tvOnTheAirResults,
  tvOnTheAirCurrentPage: state?.TvOnTheAir?.tvOnTheAirCurrentPage,
  tvOnTheAirTotalPages: state?.TvOnTheAir?.tvOnTheAirTotalPages,
  tvOnTheAirTotalResults: state?.TvOnTheAir?.tvOnTheAirTotalResults,
  tvOnTheAirLoading: state?.TvOnTheAir?.loading,
  tvOnTheAirError: state?.TvOnTheAir?.error,
});

const TvPopularFragment = (state) => ({
  tvPopularResults: state?.TvPopular?.tvPopularResults,
  tvPopularCurrentPage: state?.TvPopular?.tvPopularCurrentPage,
  tvPopularTotalPages: state?.TvPopular?.tvPopularTotalPages,
  tvPopularTotalResults: state?.TvPopular?.tvPopularTotalResults,
  tvPopularLoading: state?.TvPopular?.loading,
  tvPopularError: state?.TvPopular?.error,
});

const TvTopRatedFragment = (state) => ({
  tvTopRatedResults: state?.TvTopRated?.tvTopRatedResults,
  tvTopRatedCurrentPage: state?.TvTopRated?.tvTopRatedCurrentPage,
  tvTopRatedTotalPages: state?.TvTopRated?.tvTopRatedTotalPages,
  tvTopRatedTotalResults: state?.TvTopRated?.tvTopRatedTotalResults,
  tvTopRatedLoading: state?.TvTopRated?.loading,
  tvTopRatedError: state?.TvTopRated?.error,
});

const TvProvider = {
  TvAiringTodayFragment,
  TvDetailsFragment,
  TvOnTheAirFragment,
  TvPopularFragment,
  TvTopRatedFragment,
};

export default TvProvider;
