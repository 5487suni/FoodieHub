const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 5000
const mongoDB = require('./db')

mongoDB();
// const dotenv = require("dotenv");
// dotenv.config();
// mongoose.connect(process.env.mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false,
//     // useCreateIndex: true,   
// })
// .then(() => console.log("MongoDB connected!"))
// .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello world');
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})