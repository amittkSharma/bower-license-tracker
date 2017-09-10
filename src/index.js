const argv = require('yargs').argv;
const licenseFinder = require('./bower-license-tracker');
const exceptions = require('./exceptions');

// const no_path_found =  'No path found'
// const path = argv._[0] || no_path_found;
// const production = argv._[1] || false;

// console.log('arguments', argv)

// if (path === no_path_found) {
//   console.error(`${exceptions.NoProperArguments(path)}` )
//   return
// }
// else {
//   console.info(`Paths to traverse:- ${path}`);
//   licenseFinder.findLicensesInfo(path, production)
// }

function startLicenseTracking(path, isProduction) {
  console.info(`Paths to traverse:- ${path}`);
  licenseFinder.findLicensesInfo(path, isProduction)
}

module.exports = {
  run: function(path) {
    console.info('Start app creation process with arguments:  ', path);
    startLicenseTracking(path, true);
  }
}


