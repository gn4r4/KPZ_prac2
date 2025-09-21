// Імпорт ВСЬОГО тільки з index.ts
import { add, capitalize, formatNumber, Logger, type LogLevel, config } from './index';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456));

const logger = new Logger(config.LOG_LEVEL as LogLevel);
logger.info('Application started');
logger.debug('Extra debug info');
