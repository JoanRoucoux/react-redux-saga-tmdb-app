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
  TvOnTheAirFragment,
} = TvProvider;

@withRouter
@withTitle('Tv airing today')
@Reduxify((state) => ({
  // define state to extract
  ...TvOnTheAirFragment(state),
}), {
  // define actions to execute
  ...TvDispatcher,
})
class TvOnTheAirPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchTvOnTheAir();
  }

  componentDidUpdate(prevProps) {
    const {
      params: prevParams,
    } = prevProps;
    const {
      params,
    } = this.props;
    if (params.pageNumber !== prevParams.pageNumber) {
      this.fetchTvOnTheAir(params.pageNumber);
    }
  }

  fetchTvOnTheAir = () => {
    const {
      params,
      requestTvOnTheAir,
    } = this.props;
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
    requestTvOnTheAir({ pageNumber });
  };

  render() {
    const {
      tvOnTheAirResults,
      tvOnTheAirCurrentPage,
      tvOnTheAirTotalPages,
      tvOnTheAirTotalResults,
      tvOnTheAirLoading,
      tvOnTheAirError,
    } = this.props;

    console.log('[TvOnTheAirPage] Display props:', {
      tvOnTheAirResults,
      tvOnTheAirCurrentPage,
      tvOnTheAirTotalPages,
      tvOnTheAirTotalResults,
      tvOnTheAirLoading,
      tvOnTheAirError,
    });

    return (
      <>
        <Header title="Tv airing today" />
        {(tvOnTheAirError && (
          <ApiError />
        ))
        || (
          <>
            <TvList
              loading={tvOnTheAirLoading}
              results={tvOnTheAirResults}
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

export default TvOnTheAirPage;
