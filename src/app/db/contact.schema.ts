import mongoose, { models, Schema } from "mongoose";

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String },
    studyLevel: { type: String, required: true },
    fieldOfStudy: { type: String },
    message: { type: String },
    status: {
        type: String,
        enum: ['unseen', 'processing', 'resolved'],
        default: 'unseen'
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    notes: [{
        content: String,
        addedBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
        addedAt: { type: Date, default: Date.now }
    }],
    sentAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Update the updatedAt field before saving
contactSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Contact = models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;