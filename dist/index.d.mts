import { z } from 'zod';

declare function add(a: number, b: number): number;

declare function capitalize(s: string): string;

type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};
declare function formatNumber(value: number, options?: NumberFormatOptions): string;

type LogLevel = 'silent' | 'info' | 'debug';
declare class Logger {
  private level;
  constructor(level: LogLevel);
  info(msg: string): void;
  debug(msg: string): void;
}

declare const schema: z.ZodObject<
  {
    APP_PRECISION: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    LOG_LEVEL: z.ZodDefault<
      z.ZodEnum<{
        silent: 'silent';
        info: 'info';
        debug: 'debug';
      }>
    >;
  },
  z.core.$strip
>;
declare const config: {
  APP_PRECISION: number;
  LOG_LEVEL: 'silent' | 'info' | 'debug';
};
type Config = z.infer<typeof schema>;

export {
  type Config,
  type LogLevel,
  Logger,
  type NumberFormatOptions,
  add,
  capitalize,
  config,
  formatNumber,
};
