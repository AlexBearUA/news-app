// import css from './NewsCard.module.scss';

export const NewsCard = ({ abstract, title, url, date, section, media }) => {
  const imgUrl =
    media.length !== 0
      ? media[0]['media-metadata'][2].url
      : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{abstract}</p>
    </div>
  );
};
