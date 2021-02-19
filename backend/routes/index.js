const express = require('express')
const router = express.Router()
const apiRouter = require('./api')

router.use('/api', apiRouter)

router.get('/hello/world', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.send("Hello Bitch!")
    res.json(apiRouter)
})

module.exports = router