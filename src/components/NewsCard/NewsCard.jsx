import { BsHeart } from 'react-icons/bs';
import { formatDate } from 'helpers/formatDate';
import css from './NewsCard.module.scss';

export const NewsCard = ({ abstract, title, url, date, section, media }) => {
  const imgUrl =
    media.length !== 0
      ? media[0]['media-metadata'][2].url
      : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return (
    <div className={css.newsCard}>
      <img className={css.newsImg} src={imgUrl} alt={title} />
      <p className={css.newsSection}>{section}</p>
      <button type="button" className={css.favoriteBtn}>
        Add to favorite <BsHeart className={css.newsIcon} />
      </button>
      <p className={css.newsTitle}>{title}</p>
      <p className={css.newsAbstract}>{abstract}</p>
      <div className={css.newsBottomWraper}>
        <p className={css.newsDate}>{formatDate(date)}</p>
        <a className={css.newsLink} href={url}>
          Read more
        </a>
      </div>
    </div>
  );
};
