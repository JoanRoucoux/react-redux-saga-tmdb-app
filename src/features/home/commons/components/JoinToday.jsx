import React from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import backgroundImage2 from '../assets/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpeg';

const JoinToday = () => (
  <Paper
    style={{
      color: '#fff',
      backgroundImage: `url(${backgroundImage2})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '32px 0px',
    }}
  >
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid
        item
        md={8}
        xs={12}
      >
        <Box
          sx={{
            pl: 3,
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
          >
            Join Today
          </Typography>
          <Typography
            component="h2"
            variant="body1"
          >
            Get access to maintain your own custom personal lists, track what you&apos;ve seen and
            search and filter for what to watch next—regardless if it&apos;s in theatres,
            on TV or available on popular streaming services like Acorn TV, Kocowa, Peacock Premium,
            and DOCSVILLE.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
      >
        <Button
          variant="contained"
          size="large"
          href="https://www.themoviedb.org/signup"
          style={{
            backgroundColor: '#805be7',
            textAlign: 'center',
          }}
        >
          Sign Up
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

export default JoinToday;
