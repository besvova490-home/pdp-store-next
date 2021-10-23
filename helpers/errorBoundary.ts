const errorBoundary = (e: Record<string, unknown>): Error => {
  if (e.response) {
    throw e.response;
  } else if (e.data) {
    throw e.data;
  }

  throw new Error("Something goes wrong");
};

export default errorBoundary;
