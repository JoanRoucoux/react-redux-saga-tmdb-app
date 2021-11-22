import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Pagination,
  PaginationItem,
} from '@mui/material';

const PaginationView = ({
  currentPage,
  link,
  totalPages,
}) => (
  <>
    {(totalPages && currentPage) && (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 3,
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${link}${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
          showFirstButton
          showLastButton
        />
      </Box>
    )}
  </>
);

PaginationView.propTypes = {
  currentPage: PropTypes.number,
  link: PropTypes.string,
  totalPages: PropTypes.number,
};

PaginationView.defaultProps = {
  currentPage: null,
  link: null,
  totalPages: null,
};

export default PaginationView;
