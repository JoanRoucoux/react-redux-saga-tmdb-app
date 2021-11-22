const AccountDetailsFragment = (state) => ({
  personPopularResults: state?.PersonPopular?.personPopularResults,
  personPopularCurrentPage: state?.PersonPopular?.personPopularCurrentPage,
  personPopularTotalPages: state?.PersonPopular?.personPopularTotalPages,
  personPopularTotalResults: state?.PersonPopular?.personPopularTotalResults,
  personPopularLoading: state?.PersonPopular?.loading,
  personPopularError: state?.PersonPopular?.error,
});

const AccountProvider = {
  AccountDetailsFragment,
};

export default AccountProvider;
