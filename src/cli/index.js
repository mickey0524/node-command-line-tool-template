const commander = require('commander');
const path = require('path');

const log = require('../utils/log');

const version = require('../../package.json').version;

commander
  .version(version)
  .option('-i, --ip', 'output local ip')
  .option('-d, --directory', 'project directory')
  .parse(process.argv)

if (commander.ip) {
  log.info(`local ip -> ${require('../utils/localip')}`);
  process.exit();
}

else if (commander.directory) {
  log.info(`project directory -> ${path.resolve()}`);
  process.exit();
}

require('../controller');
