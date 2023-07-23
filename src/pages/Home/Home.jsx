import { useContext, useEffect, useState } from 'react';
import { CategoriesMenu } from 'components/CategoriesMenu/CategoriesMenu';
import { NewsList } from 'components/NewsList/NewsList';
import { ThemeContext } from 'components/App';
import newsApi from '../../services/news-api';
import css from './Home.module.scss';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const [fetchedNews, setFetchedNews] = useState([]);

  useEffect(() => {
    newsApi
      .getMostPopularNews()
      .then(news => setFetchedNews(news))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className={`${css.home} ${theme}`}>
      <CategoriesMenu />
      <NewsList news={fetchedNews} />
    </section>
  );
};

export default Home;
