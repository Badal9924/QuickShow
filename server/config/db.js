import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database Connected Successfully :)")
        })
        await mongoose.connect(`${process.env.MONGO_DB_URI}/moviesTicketBookingApp`)
    } catch (error) {
        console.log({ message: error.message, error });
    }
}
export default connectDB;