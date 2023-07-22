import axios from 'axios';

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

const api = {
  getNewsCategories,
};

export default api;
