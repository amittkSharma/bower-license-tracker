const argv = require('yargs').argv;
const licenseFinder = require('./bower-license-tracker');
const exceptions = require('./exceptions');
const _noPathProvided = 'No path is provided'
const program = require('commander');

function startLicenseTracking(path, isProduction) {

  licenseFinder.findLicensesInfo(path, isProduction)
}

program
  .option('--path', '[required] Path to bower json for package under consideration')
  .option('--isExcel', '[optional] To generate excel workbook on the results of bower tracker')
  .on('--help', () => {
    console.log()
    console.log(`    Example:-
            $obower-tracker --path --isExcel`)
  })


module.exports = {
  run: function(path) {
    if(path == "" || path == null)
    {
      console.error(`${exceptions.NoProperArguments(_noPathProvided)}`);
    }
    else if (path.path === '--help') {
      program.outputHelp()
      return
    }
    else {
      console.info(`Paths to traverse:- ${JSON.stringify(path)}`);
      startLicenseTracking(path, true);
    }
  }
}


