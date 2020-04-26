const mongoose = require('mongoose');
let count = 0;
const MONGO_URI='mongodb+srv://devanshu:devanshu@devanshu-cluster-latjg.mongodb.net/test?retryWrites=true&w=majority';

const options = {
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
    
};
const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect(MONGO_URI, options).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;
