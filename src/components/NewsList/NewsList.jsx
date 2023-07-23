import { useState, useEffect } from 'react';
import { NewsCard } from 'components/NewsCard/NewsCard';
import newsApi from '../../services/news-api';
import css from './NewsList.module.scss';

export const NewsList = () => {
  const [fetchedNews, setFetchedNews] = useState([]);

  useEffect(() => {
    newsApi
      .getMostPopularNews()
      .then(news => setFetchedNews(news))
      .catch(error => console.log(error));
  }, []);

  return (
    <ul>
      {fetchedNews.map(({ abstract, title, url, date, section, media }) => (
        <li key={url}>
          <NewsCard
            abstract={abstract}
            title={title}
            media={media}
            url={url}
            date={date}
            section={section}
          />
        </li>
      ))}
    </ul>
  );
};
