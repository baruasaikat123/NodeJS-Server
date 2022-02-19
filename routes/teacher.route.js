const router = require('express').Router()
const Teacher = require('../models/teacher.model')

//Teacher GET route
router.get('/info', async (req, res) => {
    res.send('Register Teacher')
})

//Teacher POST route
router.post('/register', async (req, res) => {
    try {
        const teacher = new Teacher(req.body)
        await teacher.save()
        return res.status(201).json({ Message: 'Registered successfully' })
    }
    catch (e) {
        console.log(e)
        return res.status(422).json({ Error:'Internal server error.Please try again later.'})
    }
})

module.exports = router