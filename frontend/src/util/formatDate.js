export const formatDate = (dateUTC) => {
  const options = {
    dateStyle: 'long',
    timeStyle: 'short',
  };
  const date = new Date(dateUTC).toLocaleString('pt-BR', options);
  return date;
};
