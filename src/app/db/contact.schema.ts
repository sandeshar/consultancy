import mongoose, { models, Schema } from "mongoose";

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String },
    studyLevel: { type: String, required: true },
    fieldOfStudy: { type: String },
    message: { type: String },
    sentAt: { type: Date, default: Date.now },
});

const Contact = models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;