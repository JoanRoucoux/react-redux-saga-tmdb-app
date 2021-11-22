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
  TvProvider,
  TvDispatcher,
} from '../redux';
import TvList from '../components/TvList';

const {
  TvPopularFragment,
} = TvProvider;

@withRouter
@withTitle('Tv popular')
@Reduxify((state) => ({
  // define state to extract
  ...TvPopularFragment(state),
}), {
  // define actions to execute
  ...TvDispatcher,
})
class TvPopularPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchTvPopular();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchTvPopular(params.pageNumber);
    }
  }

  fetchTvPopular = () => {
    const {
      params,
      requestTvPopular,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestTvPopular({ pageNumber });
  };

  render() {
    const {
      tvPopularResults,
      tvPopularCurrentPage,
      tvPopularTotalPages,
      tvPopularTotalResults,
      tvPopularLoading,
      tvPopularError,
    } = this.props;

    console.log('[TvPopularPage] Display props:', {
      tvPopularResults,
      tvPopularCurrentPage,
      tvPopularTotalPages,
      tvPopularTotalResults,
      tvPopularLoading,
      tvPopularError,
    });

    return (
      <>
        <Header title="Tv popular" />
        {(tvPopularError && (
          <ApiError />
        ))
        || (
          <>
            <TvList
              loading={tvPopularLoading}
              results={tvPopularResults}
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

export default TvPopularPage;
