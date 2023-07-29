import axios from 'axios';
import {
  normalizePopularNews,
  normalizeNewsByCategory,
} from '../helpers/normalizers';

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
  return normalizePopularNews(results);
}

async function getNewsByCategory(category) {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}news/v3/content/all/${encodeURIComponent(
      category
    )}.json?limit=20&offset=1&api-key=${API_KEY}`
  );
  return normalizeNewsByCategory(results);
}

const api = {
  getNewsCategories,
  getMostPopularNews,
  getNewsByCategory,
};

export default api;

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q='ukraine'&api-key=HuhT2LeoT7Ua2Tg2s6puWXB3yc9UXWQk
