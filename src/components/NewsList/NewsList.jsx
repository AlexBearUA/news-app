import { NewsCard } from 'components/NewsCard/NewsCard';
import css from './NewsList.module.scss';

export const NewsList = ({ news }) => {
  return (
    <ul className={css.newsList}>
      {news.map(({ abstract, title, url, date, section, media }) => (
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
