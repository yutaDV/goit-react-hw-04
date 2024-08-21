
import axios from 'axios';

const API_KEY = '6MMOaN_rcOWvLSrunt6lXQnJ38RzIEjOTXTbCtSyCOk';
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = async (query, page = 1, perPage = 20) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: API_KEY
      }
    });
    console.log('Response data:', response.data); 
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};
