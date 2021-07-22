const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const navbarRoutes = require('./navbar-routes.js');

router.use('/', homeRoutes);
router.use('/navbar', navbarRoutes);
router.use('/api', apiRoutes);

module.exports = router;
