import mongoose from "mongoose";

export const ConnectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDb is Connected with ${connection.host}`)
};

//config mongoDB
