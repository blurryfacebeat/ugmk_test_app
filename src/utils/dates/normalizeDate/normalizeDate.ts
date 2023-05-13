export const normalizeDate = (date: string) => {
  const originalDate = date.replace(
    /([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/g,
    '$2/$1/$3',
  );

  return new Date(originalDate);
};
