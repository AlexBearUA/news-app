import axios from 'axios';
import { normalaziedNews } from '../helpers/normalaziers';

const API_KEY = 'HuhT2LeoT7Ua2Tg2s6puWXB3yc9UXWQk';
const BASE_URL = 'https://api.nytimes.com/svc/';

async function getNewsCategories() {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}news/v3/content/section-list.json?api-key=${API_KEY}`
  );
  return results;
}

async function getMostPopularNews() {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
  );
  return normalaziedNews(results);
}

const api = {
  getNewsCategories,
  getMostPopularNews,
};

export default api;
