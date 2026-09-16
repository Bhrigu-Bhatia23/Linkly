import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    name: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    links: [
        {
            title: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ]
})

export default mongoose.models.Profile ||
    mongoose.model("Profile", ProfileSchema);