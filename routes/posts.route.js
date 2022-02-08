const router = require('express').Router()

//GET posts
router.get('/posts', async(req, res) => {
    res.send('All posts here')
})

module.exports = router