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
  TvAiringTodayFragment,
} = TvProvider;

@withRouter
@withTitle('Tv airing today')
@Reduxify((state) => ({
  // define state to extract
  ...TvAiringTodayFragment(state),
}), {
  // define actions to execute
  ...TvDispatcher,
})
class TvAiringTodayPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchTvAiringToday();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchTvAiringToday(params.pageNumber);
    }
  }

  fetchTvAiringToday = () => {
    const {
      params,
      requestTvAiringToday,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestTvAiringToday({ pageNumber });
  };

  render() {
    const {
      tvAiringTodayResults,
      tvAiringTodayCurrentPage,
      tvAiringTodayTotalPages,
      tvAiringTodayTotalResults,
      tvAiringTodayLoading,
      tvAiringTodayError,
    } = this.props;

    console.log('[TvAiringTodayPage] Display props:', {
      tvAiringTodayResults,
      tvAiringTodayCurrentPage,
      tvAiringTodayTotalPages,
      tvAiringTodayTotalResults,
      tvAiringTodayLoading,
      tvAiringTodayError,
    });

    return (
      <>
        <Header title="Tv airing today" />
        {(tvAiringTodayError && (
          <ApiError />
        ))
        || (
          <>
            <TvList
              loading={tvAiringTodayLoading}
              results={tvAiringTodayResults}
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

export default TvAiringTodayPage;
