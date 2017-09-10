'use strict'

module.exports = {
  NoProperArguments:(path) => {
    return `module stopped working: ${path}`
  },

  ErrorInWritingFile:(path) => {
    return `not able to write the file: ${path}`
  },

  ErrorInReadingBowerPackages:(path, err) => {
    return `fail to read bower packages at: ${path} and error is: ${err}`
  }
}
