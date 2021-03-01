const express = require('express')
const { Review } = require('../../db/models')
const asyncHandler = require('express-async-handler')
const router = express.Router()

router.get('/', asyncHandler(async (_req, res) => {
    const reviews = await Review.findAll()
    return res.json({reviews})
}))

router.get('/user/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id, 10)
    const reviews = await Review.findAll({where:{userId: userId}})
    return res.json(reviews)
}))

router.get('/listing/:id(\\d+)', asyncHandler(async(req, res) =>{
    const listingId = parseInt(req.params.id, 10)
    const reviews = await Review.findAll({where:{listingId: listingId}})
    return res.json(reviews)
}))

router.post('/', asyncHandler(async (req, res) =>{
    const { comment, rating, userId, listingId} = req.body
    const review = await Review.createReview({ comment, rating, userId, listingId })

    return res.json({
        review,
    })
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) =>{
    const reviewId = parseInt(req.params.id, 10)
    const review = Review.findByPk(reviewId)
    Review.destroy({where: {id: reviewId}})
    return res.json({
        review,
    })
}))
module.exports = router