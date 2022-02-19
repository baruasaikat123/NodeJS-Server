const router = require('express').Router()
const Teacher = require('../models/teacher.model')

//Teacher GET route
router.get('/teacher-info', async (req, res) => {
    res.send('Get Teacher info')
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
        return res.status(500).json({Message:'Internal server error.Please try again later.'})
    }
})