const SearchMultiFragment = (state) => ({
  searchMultiTotalResults: state?.SearchMulti?.searchMulti,
  searchMultiLoading: state?.SearchMulti?.loading,
  searchMultiError: state?.SearchMulti?.error,
});

const SearchProvider = {
  SearchMultiFragment,
};

export default SearchProvider;
