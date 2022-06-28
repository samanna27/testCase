const getWeightRatingDown = (dataA: number, dataB: number) => {
  if (dataA === null && dataB === null) {
    return 0;
  }

  if (dataA === null) {
    return 1;
  }

  if (dataB === null) {
    return -1;
  }

  return null;
};

type Helper = {
  id: number,
};

export const sortRecordsCodeDown = <T extends Helper>(recordA: T, recordB: T) => {
  const weight = getWeightRatingDown(recordA.id, recordB.id);

  if (weight !== null) {
    return weight;
  }

  return (recordB.id-recordA.id);
};
