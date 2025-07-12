import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true, 
        trim: true,
    },

    image: {
        type: String,
        required: true
    }
});

const User = mongoose.model('Users', UserSchema);
export default User;