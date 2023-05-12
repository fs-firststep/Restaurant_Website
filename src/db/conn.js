const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/cscorner",  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true 
    //  : due to it Error : no connection MongoParseError: option usecreateindex is not supported
}).then(()=> {
    console.log(`connection successful`);
}).catch((error) => {
    console.log(`no connection ${error}`);
})

