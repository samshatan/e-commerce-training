import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongo_DB connected !! DB Host: ${connection.connection.host}`)
    } catch (error) {
        console.log("Error in MongoDB connection Failed",error);
        process.exit(1);
    }
}

export default connectDB;