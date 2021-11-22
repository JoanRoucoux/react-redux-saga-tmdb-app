const ServerSuccess = (value) => ({
  map: (fn) => ServerSuccess(fn(value)),
  catch: () => ServerSuccess(value),
  value,
});

const ServerError = (value) => ({
  map: () => ServerError(value),
  catch: (fn) => ServerSuccess(fn(value)),
  value,
});

const serverTryCatch = (fn) => (value) => {
  try {
    return ServerSuccess(fn(value));
  } catch (error) {
    return ServerError(error.message);
  }
};

const ServerParser = {
  serverTryCatch,
};

export default ServerParser;
