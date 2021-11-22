const PersonCombinedCreditsFragment = (state) => ({
  personCombinedCreditsResults: state?.PersonCombinedCredits?.personCombinedCreditsResults,
  personCombinedCreditsLoading: state?.PersonCombinedCredits?.loading,
  personCombinedCreditsError: state?.PersonCombinedCredits?.error,
});

const PersonDetailsFragment = (state) => ({
  personDetails: state?.PersonDetails?.personDetails,
  personDetailsLoading: state?.PersonDetails?.loading,
  personDetailsError: state?.PersonDetails?.error,
});

const PersonPopularFragment = (state) => ({
  personPopularResults: state?.PersonPopular?.personPopularResults,
  personPopularCurrentPage: state?.PersonPopular?.personPopularCurrentPage,
  personPopularTotalPages: state?.PersonPopular?.personPopularTotalPages,
  personPopularTotalResults: state?.PersonPopular?.personPopularTotalResults,
  personPopularLoading: state?.PersonPopular?.loading,
  personPopularError: state?.PersonPopular?.error,
});

const PersonProvider = {
  PersonCombinedCreditsFragment,
  PersonDetailsFragment,
  PersonPopularFragment,
};

export default PersonProvider;
