import log4js from "log4js";
const { configure, getLogger } = log4js;

configure({
  appenders: {
    miLoggerFile: {
      type: "file",
      filename: "logs/logs.log",
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
    miLoggerConsole: {
      type: "console",
    },
  },
  categories: {
    default: {
      appenders: ["miLoggerFile", "miLoggerConsole"],
      level: "debug",
    },
  },
});

export default getLogger();
