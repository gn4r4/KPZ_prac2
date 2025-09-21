'use strict';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Logger: () => Logger,
  add: () => add,
  capitalize: () => capitalize,
  config: () => config2,
  formatNumber: () => formatNumber,
});
module.exports = __toCommonJS(index_exports);

// src/utils/add.ts
function add(a, b) {
  return a + b;
}

// src/utils/string.ts
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// src/config.ts
var dotenv = __toESM(require('dotenv'));
var import_zod = require('zod');
dotenv.config();
var schema = import_zod.z.object({
  APP_PRECISION: import_zod.z.coerce.number().int().min(0).max(10).default(2),
  LOG_LEVEL: import_zod.z.enum(['silent', 'info', 'debug']).default('info'),
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
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    Logger,
    add,
    capitalize,
    config,
    formatNumber,
  });
