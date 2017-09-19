#!/usr/bin/env node
'use strict';

process.title = 'bower-license-tracker';

process.on('uncaughtException', function(err) {
  console.error('Caught exception:\n', err.stack);
});

var bowerTracker = require('../src/index.js');
var path = process.argv[2];
var isExcel = process.argv[3] ? process.argv[3] : false;
var parameter = { path, isExcel }

console.log(`path entered: ${parameter.path} and is excel needed: ${parameter.isExcel}`)

bowerTracker.run(parameter);