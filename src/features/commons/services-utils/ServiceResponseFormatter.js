const ServiceResponseFormatter = (
  response,
  responseParser,
  dataGetter,
) => responseParser(response)
  .map((value) => ({
    data: dataGetter(value),
    error: null,
  })).catch(
    (error) => ({
      data: null,
      error: error || 'err_default',
    }),
  ).value;

export default ServiceResponseFormatter;
