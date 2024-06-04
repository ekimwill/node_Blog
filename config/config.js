require("dotenv").config();
const logger = require("./logger.js");
const envSchema = require("../validations/env.validation.js");

const { value: envVars, error } = envSchema.validate(process.env);

if (error) {
  logger.error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  dbConnection: envVars.DB_CONNECTION,
};
