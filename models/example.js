'use strict';

const { EXAMPLE } = require('../models/modelConstants');

module.exports = (sequelize, { STRING, INTEGER }) => sequelize.define(EXAMPLE, {
  companyName: STRING,
  addressId: INTEGER
}, {});
