const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const navigationRoutes = require('./navigation-routes.js');

router.use('/', homeRoutes);
router.use('/navigation', navigationRoutes);
router.use('/api', apiRoutes);

module.exports = router;
