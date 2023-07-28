const normalizePopularNews = news => {
  return news.map(
    ({
      abstract,
      title,
      url,
      published_date: date,
      nytdsection: section,
      media,
    }) => ({
      abstract,
      title,
      url,
      date,
      section,
      media,
      favorite: false,
      readed: false,
    })
  );
};

const normalizeNewsByCategory = news => {
  return news.map(
    ({
      abstract,
      title,
      url,
      published_date: date,
      section,
      multimedia: media,
    }) => ({
      abstract,
      title,
      url,
      date,
      section,
      media,
      favorite: false,
      readed: false,
    })
  );
};

export { normalizePopularNews, normalizeNewsByCategory };
