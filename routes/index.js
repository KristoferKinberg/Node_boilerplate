'use strict';

const { getFilenamesInPath, removeJsFileFormat } = require('../utils/fileReader');

const excludes = ['index.js'];
const routes = getFilenamesInPath(__dirname)
  .filter(fileName => !excludes.includes(fileName))
  .map(fileName => require(`${__dirname}/${fileName}`));

module.exports = routes;
