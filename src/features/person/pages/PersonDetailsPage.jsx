import React, { Component } from 'react';
import { Grid } from '@mui/material';
import { Reduxify } from '../../../core';
import {
  withRouter,
  withTitle,
} from '../../commons';
import { ApiError } from '../../commons/components';
import {
  PersonProvider,
  PersonDispatcher,
} from '../redux';
import PersonBiography from '../components/PersonBiography';
import PersonProfile from '../components/PersonProfile';

const {
  PersonDetailsFragment,
} = PersonProvider;

@withRouter
@withTitle('Person details')
@Reduxify((state) => ({
  // define state to extract
  ...PersonDetailsFragment(state),
}), {
  // define actions to execute
  ...PersonDispatcher,
})
class PersonDetailsPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      params,
      requestPersonDetails,
    } = this.props;
    const {
      id: personId,
    } = params;
    requestPersonDetails({ personId });
  };

  render() {
    const {
      personDetails,
      personDetailsLoading,
      personDetailsError,
    } = this.props;

    console.log('[PersonDetailsPage] Display props:', {
      personDetails,
      personDetailsLoading,
      personDetailsError,
    });

    return (
      <>
        {(personDetailsError && (
          <ApiError />
        ))
        || (
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={3}
              xs={12}
            >
              <PersonProfile
                loading={personDetailsLoading}
                details={personDetails}
              />
            </Grid>
            <Grid
              item
              md={9}
              xs={12}
            >
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                >
                  <PersonBiography
                    loading={personDetailsLoading}
                    details={personDetails}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </>
    );
  }
}

export default PersonDetailsPage;
