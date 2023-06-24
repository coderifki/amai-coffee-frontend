export const calculateRange = (
  page: number,
  rowPerPage: number,
  total: number,
): [number, number] => {
  const startIndex = (page - 1) * rowPerPage + 1;
  let endIndex = page * rowPerPage;

  if (endIndex > total) {
    endIndex = total;
  }

  return [startIndex, endIndex];
};
