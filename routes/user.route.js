const router = require('express').Router()
const User = require('../models/user.model')

//Register GET route
router.get('/register', async (req, res, next) => {
    res.send('Register Page')
})

//Register POST route
router.post('/register', async (req, res, next) => {
    try {
        //const { email } = req.body
        /*const doesExist = await User.findOne({ email: email })
        if (doesExist) {
            return res.send('Already exists')
        }*/
        const email = req.body.email;
        const password = req.body.password;
        const user = new User({email:email, password:password})
        await user.save()
        //return res.send("success");
        return res.status(201).json({ Message: 'User registered successfully' })
        //return res.send('Registration successfull')
    } catch (err) {
        console.log(err)
    }
})

//Login GET route
// router.get('/login', (req, res, next) => {
//     res.send('Login Page')
// })

//Login POST route
// router.post('/login', async(req, res, next) => {
//     try {
        
//         const { email, password } = req.body
//         const doesExist = await User.findOne({ email: email })
//         if (!doesExist) {
//             return res.send('Email does not exists')
//         }
//         return res.send('Successfully Logged in')
//     } catch (err) {
//         console.log(err);
//     }
// })

//Logout route
// router.get('/logout', (req, res, next) => {
//     res.send('Logout')
// })

module.exports = router