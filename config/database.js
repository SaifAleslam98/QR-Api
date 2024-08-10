const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.BASE_URL).then(conn => {
        console.log(`Connected to db : ${conn.connection.name}`)
    });
}
module.exports = dbConnection;