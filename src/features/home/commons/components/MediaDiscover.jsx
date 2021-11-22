import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import backgroundImage from '../assets/cinema_seats.jpeg';

const MediaDiscover = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => navigate(`../search?query=${query}`);

  return (
    <Paper
      style={{
        color: '#fff',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '64px 0px',
        marginBottom: 24,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          Welcome to Flixer
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          align="center"
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <form
          style={{
            marginTop: 32,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <InputBase
            name="query"
            fullWidth
            placeholder="Search for anything (movie, tv show, person)"
            onChange={onInputChange}
            startAdornment={(
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )}
            style={{
              backgroundColor: '#fff',
              padding: 8,
              borderRadius: 16,
            }}
          />
        </form>
      </Container>
    </Paper>
  );
};

export default MediaDiscover;
