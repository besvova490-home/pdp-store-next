const byTextAscending = <T>(getTextProperty: (object: T) => string | number) => (objectA: T, objectB: T): number => {
  const upperA = getTextProperty(objectA);
  const upperB = getTextProperty(objectB);
  if (upperA < upperB) {
    return -1;
  }
  if (upperA > upperB) {
    return 1;
  }

  return 0;
};

export default byTextAscending;
