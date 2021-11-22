import {
  MaybeNull,
  ServerParser,
} from '../../../core';
import ServiceResponseFormatter from './ServiceResponseFormatter';

const {
  serverTryCatch,
} = ServerParser;

const RESPONSE_CODE_OK = 200;

// get movie db api fail reason
const MovieDbApiResponseFailReason = (response) => {
  const isOK = MaybeNull(response)
    .map(() => response.status)
    .value === RESPONSE_CODE_OK;

  if (isOK) {
    return null;
  }

  // or send back the fail reason/default reason
  return MaybeNull(response)
    .map(() => response.status)
    .getOrElse('err_default');
};

// get movie db api success data from response
const MovieDbApiReponseSuccessData = (response) => MaybeNull(response)
  .map(() => response.data)
  .getOrElse(null);

// try/catch parse movie db api response
const MovieDbApiResponseParser = serverTryCatch((response) => {
  const error = MovieDbApiResponseFailReason(response);
  if (error) {
    throw new Error(error);
  }
  return response;
});

// format movie db api response output
// to {data: successData, error: failReason}
const MovieDbApiServicesFormatter = (response) => ServiceResponseFormatter(
  response,
  MovieDbApiResponseParser,
  MovieDbApiReponseSuccessData,
);

export default MovieDbApiServicesFormatter;
