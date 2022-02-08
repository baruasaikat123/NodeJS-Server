const mongoose = require('mongoose') 

//define mongodb uri
const mongo_uri = process.env.MONGO_URI

//connect to the database
mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`💾 Database is connected...`)
}).catch((err) => {
    console.log(err.message)
} )