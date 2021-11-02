const queryBuilder = (params: Record<string, unknown>): string => {
  const clearParams = {};

  Object.keys(queryBuilder).forEach(key => {
    if (params[key]) {
      clearParams[key] = params[key];
    }
  });

  const queryParams = new URLSearchParams(clearParams);

  return queryParams.toString();
};

export default queryBuilder;
