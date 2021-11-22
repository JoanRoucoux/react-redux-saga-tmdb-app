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
  TvTopRatedFragment,
} = TvProvider;

@withRouter
@withTitle('Tv top rated')
@Reduxify((state) => ({
  // define state to extract
  ...TvTopRatedFragment(state),
}), {
  // define actions to execute
  ...TvDispatcher,
})
class TvTopRatedPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchTvTopRated();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchTvTopRated(params.pageNumber);
    }
  }

  fetchTvTopRated = () => {
    const {
      params,
      requestTvTopRated,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestTvTopRated({ pageNumber });
  };

  render() {
    const {
      tvTopRatedResults,
      tvTopRatedCurrentPage,
      tvTopRatedTotalPages,
      tvTopRatedTotalResults,
      tvTopRatedLoading,
      tvTopRatedError,
    } = this.props;

    console.log('[TvTopRatedPage] Display props:', {
      tvTopRatedResults,
      tvTopRatedCurrentPage,
      tvTopRatedTotalPages,
      tvTopRatedTotalResults,
      tvTopRatedLoading,
      tvTopRatedError,
    });

    return (
      <>
        <Header title="Tv top rated" />
        {(tvTopRatedError && (
          <ApiError />
        ))
        || (
          <>
            <TvList
              loading={tvTopRatedLoading}
              results={tvTopRatedResults}
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

export default TvTopRatedPage;
