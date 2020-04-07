export const getIdFromUrl = (url: string) =>
  url
    .split('/')
    .filter(Boolean)
    .pop();
