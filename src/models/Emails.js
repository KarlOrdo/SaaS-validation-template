import mongoose from "mongoose";


const emailsSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)

export default mongoose.models.Emails || mongoose.model("Emails", emailsSchema)