import mongoose from "mongoose";

//------Mongoose Connection

const connectDb = (dbUrl) => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.set('strictQuery', true)


    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
        console.log('Connected to Database!');
    });
}

export default connectDb