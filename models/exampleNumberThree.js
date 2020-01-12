'use strict';

const { EXAMPLE_NUMBER_THREE } = require('../models/modelConstants');

module.exports = (sequelize, { STRING, INTEGER }) => sequelize.define(EXAMPLE_NUMBER_THREE, {
  adress: STRING,
  cirty: STRING,
  zip: INTEGER
}, {});
