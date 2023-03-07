const {
  createLogger, transports,
} = require('winston');

const calcLogger = createLogger({
  transports: [
    new transports.Console(),
  ],
});
module.exports = calcLogger;
