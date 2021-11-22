import React, { Component } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { withTitle } from '../../commons';

@withTitle('404')
class NotFoundPage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {}

  render() {
    return (
      <Card>
        <CardContent>
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
            gutterBottom
            style={{
              marginTop: 32,
            }}
          >
            404 Page Not Found
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            variant="body2"
            style={{
              marginBottom: 32,
            }}
          >
            The page you were looking for doesn&apos;t exist
          </Typography>
          <Box
            sx={{
              textAlign: 'center',
              marginBottom: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="primary"
              href="/app/home"
            >
              Take me home
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default NotFoundPage;
