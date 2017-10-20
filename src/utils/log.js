const chalk = require('chalk');

const out = console.log;
const error = console.error;

module.exports = {
  default: function (msg) {
    out(msg);
  },
  info: function (msg) {
    out(chalk.blue(msg));
  },
  success: function (msg) {
    out(chalk.green(msg));
  },
  warn: function (msg) {
    out(chalk.yellow());
  },
  error: function (msg) {
    error(chalk.red(msg));
  }
}