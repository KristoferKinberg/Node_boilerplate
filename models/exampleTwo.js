'use strict';

const { EXAMPLE_TWO } = require('../models/modelConstants');

module.exports = (sequelize, { INTEGER }) => sequelize.define(EXAMPLE_TWO, {
  insuranceStaffId: INTEGER,
  userId: INTEGER
}, {});
