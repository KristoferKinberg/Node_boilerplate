'use strict';

const fs = require('fs');

/**
 * Reads all the file names and returns them as an array
 * @returns {string[]}
 */
const getFilenamesInPath = path => fs
  .readdirSync(path)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path  ) && (file.slice(-3) === '.js');
  });

/**
 * Formats the filenames
 * @param fileName
 * @returns {*}
 */
const formatFileName = (fileName) => [...fileName.replace('.js', '')]
  .reduce((acc, curr) => curr === curr.toUpperCase()
    ? `${acc}_${curr}`
    : `${acc}${curr}`
    , '');

/**
 * Creates an object with all the models names with upper cased words with underscore-separated
 * @returns {{}|{[p: string]: *}}
 */
const createModelConstants = path => getFilenamesInPath(path)
  .reduce((acc, curr) => ({ ...acc, [formatFileName(curr).toUpperCase()]: curr.replace('.js', '') }), {});

/**
 * Remove js file-format from string
 * @param filename
 * @returns {*|Object|void|string}
 */
const removeJsFileFormat = filename => filename.replace('.js', '');

module.exports = {
  getFilenamesInPath,
  formatFileName,
  createModelConstants,
  removeJsFileFormat
};
