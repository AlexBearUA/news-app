// import css from './NewsCard.module.scss';

export const NewsCard = ({ abstract, title, url, date, section, media }) => {
  const imgUrl = media[0]['media-metadata'][0].url;

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{abstract}</p>
    </div>
  );
};
