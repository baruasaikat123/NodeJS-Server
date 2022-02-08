const express = require('express') 
const morgan = require('morgan')
//const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const app = express()  //initialize express server
app.use(morgan('dev'))   //use morgan
app.use(express.json())  
app.use(cors())

//root route
app.get('/', (req, res) => {
    res.send('Welcome')
})

const port = process.env.PORT || 5000  //port define

//database connection
require('./database/connection')

//configure routes
app.use('/user', require('./routes/user.route'))
app.use('/users', require('./routes/posts.route'))

//listen to the port 5000
app.listen(port, () => console.log(`🚀 Server is running on ${port}`))


