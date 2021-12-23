import { createLogger, format as winstonFormat, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: winstonFormat.combine(
    winstonFormat.timestamp(),
    winstonFormat.errors({ stack: true }),
    winstonFormat.splat(),
    winstonFormat.colorize(),
  ),
  defaultMeta: { service: "patchylauncher-template" },
  transports: [
    new transports.Console({
      format: winstonFormat.simple(),
    }),
    new transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

logger.info("Logger initialized");
