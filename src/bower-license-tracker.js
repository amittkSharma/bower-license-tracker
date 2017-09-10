const licenseCheckerBower = require('../bower-license');
const treeify = require('treeify');
const fs = require('fs-extra');
const copy = require('copy-files');
const colors = require('colors');
const json2csv = require('json2csv');

const _noInfoFound = 'No information found'
const _noFileFound = 'No File Found'
const options = {
  outputFolderName: '/bower_licenses/',
  outputFileName: 'bower_licenses.json'
}


licenseFinder = function (path) {
  const p =  new Promise((resolve, reject) => {
    licenseCheckerBower.init(path, (licenseMap, err)=> {
      if (err) {
        reject('error occured in reading bower packages', err);
      }
      resolve(licenseMap)
    });
  })
  return p
}

getExtendedJson = function(path, json) {
  var updatedpackages = Object.keys(json).map(x => {
    var info = json[x]
    var repoName = info.repository ? info.repository.replace('git+', '') : _noInfoFound
    return {
      'package name': info.name,
      'licenses': info.licenses,
      'download url': repoName,
      'license file': info.licenseFile,
      'publisher': info.publisher ? info.publisher :  info.repository ? info.repository.split("/").slice(-2, -1)[0] : _noInfoFound,
      'description': info.description,
      'programming language': 'JavaScript',
      'package version': info.version,
      'publisher contact information': info.email ? info.email : repoName,
    }
  })
  var packages = {}

  updatedpackages.forEach(x => {
    var key = x['package name'] + ':' + x['package version']
    packages[key] = x
  })

  var obj = {
    license: {
      path,
      packages,
    }
  }
  return obj
}

writeJsonFile = function(path, result) {
  const p = new Promise((resolve, reject) => {
    const updatedResult = getExtendedJson(path, result)
    const destinationFolder = path + options.outputFolderName
    const fullPath = destinationFolder + options.outputFileName
    fs.outputJson(fullPath, updatedResult, (err) => {
      if (err) {
        console.log('Error in writing json files::'.red + err);
        reject('error in writing the json file');
      }
      resolve({destinationFolder, updatedResult})
    });
  })
  return p
}

copyLicenseFiles = function(destinationFolder, updatedResult) {
  let objFiles = {};
  let numCopiedFiles = 0;
  let numNoLicenseFiles = 0;
  const packages = updatedResult.license.packages
  Object.keys(packages).forEach(x => {
    if (packages[x]['license file'] === _noFileFound) {
      numNoLicenseFiles++;
      console.log('No license file is available for package:'.red, x);
    }
    else {
      numCopiedFiles++;
      var key = packages[x]['package name']
      objFiles[key] = packages[x]['license file']
    }
  })

  copy({
    files: objFiles,
    dest: destinationFolder
  }, function (err) {
    if (!err) {
      console.log('All licenses files copied successfully.'.green);
      console.log('Total licenses file copied successfully:'.green, numCopiedFiles);
      console.log('Total licenses copied fail:'.green, numNoLicenseFiles);
    }
  })
}

module.exports = {
  findLicensesInfo: function (path, production) {
    licenseFinder(path).then(result => {
      writeJsonFile(path, result).then(x => {
        console.log('JSON file is created'.green)
        copyLicenseFiles(x.destinationFolder, x.updatedResult)
      })
    })
  }
}