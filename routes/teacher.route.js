const router = require('express').Router()
const Teacher = require('../models/teacher.model')

//Teacher GET route
router.get('/register', async (req, res) => {
    res.send('Register Teacher')
})

//Teacher POST route
router.post('/register', async (req, res) => {
    try {
        const mobile = req.body.mobile
        const mobileExist = await Teacher.findOne({ mobile: mobile })
        if (mobileExist) {
            return res.status(422).json({ Error: 'Mobile already exists.' })
        }
        const teacher = new Teacher(req.body)
        await teacher.save()
        return res.status(201).json({ Message: 'Registered successfully' })
    }
    catch (e) {
        console.log(e)
        return res.status(503).json({ unavailable:'server error.'})
    }
})

module.exports = router