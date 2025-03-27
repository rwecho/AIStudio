const isDev = process.env.NODE_ENV === "development";

type LogLevel = "info" | "warn" | "error";

class Logger {
  private prefix: string;

  constructor(prefix: string = "AIStudioX") {
    this.prefix = prefix;
  }

  private log(level: LogLevel, message: string, ...args: any[]) {
    if (!isDev) return;

    const timestamp = new Date().toISOString();
    const prefix = `[${this.prefix}] [${level.toUpperCase()}] [${timestamp}]`;

    console[level](`${prefix} ${message}`, ...args);
  }

  info(message: string, ...args: any[]) {
    this.log("info", message, ...args);
  }

  warn(message: string, ...args: any[]) {
    this.log("warn", message, ...args);
  }

  error(message: string, ...args: any[]) {
    this.log("error", message, ...args);
  }
}

export const logger = new Logger();
