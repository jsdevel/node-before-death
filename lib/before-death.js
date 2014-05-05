'use strict';


module.exports = beforeDeath;

var once = require('once');

function beforeDeath(fn){
  fn = once(fn);
  process.on('exit', fn.bind(null, null));
  process.on('uncaughtException', fn);
  process.on('SIGHUP', fn.bind(null, null, 0, 'SIGHUP'));
  process.on('SIGINT', fn.bind(null, null, 0, 'SIGINT'));
  process.on('SIGTERM', fn.bind(null, null, 0, 'SIGTERM'));
}
