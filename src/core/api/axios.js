import axios from 'axios';

// configure base url and params for axios services
axios.defaults.baseURL = process.env.REACT_APP_MOVIE_DB_API_BASE_URL;
axios.defaults.params = {};
axios.defaults.params.api_key = process.env.REACT_APP_MOVIE_DB_API_KEY;

export default axios;
