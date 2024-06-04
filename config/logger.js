const winston = require("winston");
const config = require("./config.js");
const { format, createLogger, transports } = winston;
const { printf, combine, timestamp, colorize, uncolorize } = format;

const winstonFormat = printf((obj) => {
  const { level, message, timestamp, stack } = obj;
  return `${timestamp} ${level}: ${stack || message}`;
});
const logger = createLogger({
  level: config.env === "development" ? "debug" : "info",
  format: combine(
    timestamp(),
    winstonFormat,
    config.env === "devlopment" ? colorize() : uncolorize()
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
