const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listing.js')
const reviewsRouter = require('./review.js')
const cartRouter = require('./cart.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/listings', listingsRouter)

router.use('/reviews', reviewsRouter)

router.use('/cart', cartRouter)

module.exports = router