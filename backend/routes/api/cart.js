const express = require('express')
const { Listing } = require('../../db/models')
const asyncHandler = require('express-async-handler')
const router = express.Router()


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const listId = parseInt(req.params.id, 10)
    const listing = await Listing.findByPk(listId)
    return res.json(listing)
}))

module.exports = router