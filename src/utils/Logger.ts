import * as winston from 'winston';

// Определение формата логов
const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

// Создание логгера
export const logger = winston.createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        // Вывод логов в консоль
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                logFormat
            )
        }),
        // Вывод логов в файл
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// Создание папки для логов, если она ещё не существует
const fs = require('fs');
const dir = './logs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
