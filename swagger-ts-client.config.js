const settings = {
  swaggerFile: "./swagger.json",
  operations: {
    outPutPath: "./api/",
    operationsGroupNameTransformFn: (operationName, httpVerb, operation) => {
        return "allApi"
  }
}
};

module.exports = settings;