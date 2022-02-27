const process = require('process');

exports.sigintEvent = () => {
  process.exit();
};