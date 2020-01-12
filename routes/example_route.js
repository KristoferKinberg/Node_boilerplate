'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const models = require('../models');
const { EXAMPLE, EXAMPLE_TWO, EXAMPLE_NUMBER_THREE } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

/**
 * Set up crud for an endpoint
 */
const  { getAllList } = require('../core/basicQueries');
const router = applyRoutes(EXAMPLE, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

/**
 * Get all data for a view
 */
router.get('/api/home', (req, res, next) => {
  getAllList([EXAMPLE_TWO, EXAMPLE_NUMBER_THREE])
    .then(([ slides, news, intro]) => res.send({ slides, news, intro }));
});

module.exports = router;





