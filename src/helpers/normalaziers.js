const normalaziedNews = news => {
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
    })
  );
};

export { normalaziedNews };
