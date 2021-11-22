import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import thumbnail from './assets/error.jpeg';

const ApiError = () => (
  <Card
    sx={{
      marginTop: 4,
    }}
  >
    <CardContent>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <CardMedia
            component="img"
            alt=""
            image={thumbnail}
          />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <Typography
            variant="h1"
            gutterBottom
          >
            Oops!
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
          >
            Something went wrong.
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
            style={{
              marginBottom: 16,
            }}
          >
            Please try again by reloading the page. If your issue is persistent then please contact our Support.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/app/home"
          >
            Take me home
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default ApiError;
