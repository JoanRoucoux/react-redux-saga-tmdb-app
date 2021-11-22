import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
} from '@mui/material';
import { FPUtils } from '../../../core';
import { PersonConfig } from '../commons';
import PersonCard from './PersonCard';

const {
  isDefined,
} = FPUtils;

const {
  formatPersonList,
} = PersonConfig;

const PersonPopularList = ({
  loading,
  results,
}) => {
  const formattedPersonList = formatPersonList(results);

  return (
    <Box>
      <Grid
        container
        spacing={3}
      >
        {((loading || !isDefined(formattedPersonList)) ? Array.from(new Array(20)) : formattedPersonList)
          .map((person) => (
            <Grid
              key={uuidv4()}
              item
              lg={3}
              md={6}
              xs={12}
            >
              <PersonCard person={person} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

PersonPopularList.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array,
};

PersonPopularList.defaultProps = {
  loading: false,
  results: null,
};

export default PersonPopularList;
