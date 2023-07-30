import { useContext, useEffect, useState } from 'react';
import { CategoriesMenu } from 'components/CategoriesMenu/CategoriesMenu';
import { NewsList } from 'components/NewsList/NewsList';
import { ThemeContext, NewsQueryContext } from 'components/App';
import newsApi from '../../services/news-api';
import css from './Home.module.scss';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const { newsQuery } = useContext(NewsQueryContext);

  const [fetchedNews, setFetchedNews] = useState([]);

  const [categoriesList, setCategoriesList] = useState([]);

  const [newsCategory, setNewsCategory] = useState('');

  console.log(newsQuery);

  useEffect(() => {
    newsApi
      .getMostPopularNews()
      .then(news => setFetchedNews(news))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    newsApi
      .getNewsCategories()
      .then(categories => setCategoriesList(categories))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (!newsCategory || newsCategory === 'others') {
      return;
    }
    newsApi
      .getNewsByCategory(newsCategory)
      .then(news => setFetchedNews(news))
      .catch(error => console.log(error));
  }, [newsCategory]);

  return (
    <section className={`${css.home} ${theme}`}>
      <CategoriesMenu
        categoriesList={categoriesList}
        setNewsCategory={setNewsCategory}
      />
      <NewsList news={fetchedNews} />
    </section>
  );
};

export default Home;
