const argv = require('yargs').argv;
const licenseFinder = require('./bower-license-tracker');
const exceptions = require('./exceptions');
const _noPathProvided = 'No path is provided'

function startLicenseTracking(path, isProduction) {

  licenseFinder.findLicensesInfo(path, isProduction)
}

module.exports = {
  run: function(path) {
    if(path == "" || path == null)
    {
      console.error(`${exceptions.NoProperArguments(_noPathProvided)}`);
    }
    else {
      console.info(`Paths to traverse:- ${path}`);
      startLicenseTracking(path, true);
    }
  }
}


