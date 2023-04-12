import axios from 'axios'

import { API_KEY } from '../../config';

// Use API_KEY in your code


// Use API_KEY in your code

export default axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
      api_key: API_KEY,
    }
})