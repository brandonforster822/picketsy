const express = require('express')
const { Listing } = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')
const router = express.Router()
const {Op} = require("sequelize")
const sequelize = require("sequelize")

router.get('/', asyncHandler(async (_req, res) => {
    const listings = await Listing.findAll()
    return res.json({listings})
}))


router.get(`/:id(\\d+)`, asyncHandler(async(req, res) => {
    const listId = parseInt(req.params.id, 10)
    const listing = await Listing.findByPk(listId)
    return res.json(listing)
}))

router.get(`/user/:id(\\d+)`, asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id, 10)
    const listings = await Listing.findAll({where:{userId: userId}})
    return res.json(listings)
}))

router.get(`/search/:id(\\w+)`, asyncHandler(async(req, res) => {
    const search = req.params.id
    const listings = await Listing.findAll({where: {name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + search + '%')}})
    return res.json(listings)
}))

router.post('/', singleMulterUpload("image"), asyncHandler(async (req, res) => {
    const { name, userId, description, category, price } = req.body
    const imgLink = await singlePublicFileUpload(req.file)
    const listing = await Listing.createListing({ name, userId, description, imgLink, category, price})

    return res.json({
        listing,
    })
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const listingId = parseInt(req.params.id, 10)
    const listing = Listing.findByPk(listingId)
    Listing.destroy({where: {id: listingId}})
    return res.json({
        listing,
    })
}))



module.exports = router