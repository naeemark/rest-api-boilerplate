const path = require('path');

// import .env variables
require('dotenv-safe').config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  serviceName: 'rest-api-boilerplate',
  http: {
    timeout: 5000,
    responseType: 'json',
    responseEncoding: 'utf8',
    retries: 3
  }
};
