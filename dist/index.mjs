// src/utils/add.ts
function add(a, b) {
  return a + b;
}

// src/utils/string.ts
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// src/config.ts
import * as dotenv from 'dotenv';
import { z } from 'zod';
dotenv.config();
var schema = z.object({
  APP_PRECISION: z.coerce.number().int().min(0).max(10).default(2),
  LOG_LEVEL: z.enum(['silent', 'info', 'debug']).default('info'),
});
var config2 = schema.parse(process.env);

// src/format/number.ts
function formatNumber(value, options) {
  const precision = options?.precision ?? config2.APP_PRECISION;
  return value.toFixed(precision);
}

// src/logging/logger.ts
var Logger = class {
  constructor(level) {
    this.level = level;
  }
  info(msg) {
    if (this.level !== 'silent') {
      console.log('[INFO]', msg);
    }
  }
  debug(msg) {
    if (this.level === 'debug') {
      console.log('[DEBUG]', msg);
    }
  }
};
export { Logger, add, capitalize, config2 as config, formatNumber };
