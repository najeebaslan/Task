
const mongoose = require('mongoose');
const { MONGODB } = require('../config')
module.exports = function DB() {
    mongoose.connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }).then(() => console.log("connected to Database")).
        catch((error) => logger.error("Error no connected to Database" + error)
        );

    mongoose.set('useCreateIndex', true)


}