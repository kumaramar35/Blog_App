import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const USERNAME = process.env.DB_USER; 
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async ()=>{
const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.uuxlfka.mongodb.net/?retryWrites=true&w=majority`;

try {
    await mongoose.connect(URL,{useUnifiedTopology: true}); // useUnifedTopology means use the latest technoogy
    console.log("Database connected");
} catch (error) {
    console.log(`erron while connecting to DB - ${error.message}`)
}
}

export default Connection;