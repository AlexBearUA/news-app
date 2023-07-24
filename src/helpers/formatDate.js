export const formatDate = date => {
  const formatedDate = date.split('-').toReversed().join('/');
  return formatedDate;
};
