#!/usr/bin/env node
'use strict';

process.title = 'bower-license-tracker';

process.on('uncaughtException', function(err) {
  console.error('Caught exception:\n', err.stack);
});

var bowerTracker = require('../index.js');
var parameter = process.argv.slice(2).join(' ');

console.log(`path entered ${parameter}`)

bowerTracker.run(parameter);