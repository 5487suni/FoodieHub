const mongoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

const mongoDB = async () => {
        await mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true},
        async(err, result)=> {
            if (err) console.log("---", err)
            else {
                console.log("db connected");
                const fetched_data = await mongoose.connection.db.collection('food_items');
                fetched_data.find({}).toArray(function (err, data) {
                    if (err) console.log(err);
                    else console.log(data);
                })
            }   
        }
    );
}

module.exports = mongoDB;
