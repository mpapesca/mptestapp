const { logMessage } = require('../log-message');

exports.exitEvent = (code) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  logMessage('shut down');
};