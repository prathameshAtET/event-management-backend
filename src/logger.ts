import winston, { format } from "winston";
import { NODE_ENV } from "./env_vars";
import { stack } from "sequelize/types/utils";

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.printf(info => {
            return `${info.timestamp} [${info.level}] : ${info.message} \n ${info.stack}`;
        })
    ),
    transports: [
        // Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        // Write all logs
        new winston.transports.File({ filename: 'logs/application.log' }),
    ]
});

if (NODE_ENV === 'dev') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export default logger;