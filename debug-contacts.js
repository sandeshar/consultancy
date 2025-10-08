const mongoose = require('mongoose');

// Connection string
const connectionString = "mongodb+srv://bandb:1234554321@bandb.wfzji.mongodb.net/?retryWrites=true&w=majority&appName=BandB";

// Contact schema
const contactSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    notes: [{
        content: String,
        addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
        addedAt: { type: Date, default: Date.now }
    }],
    sentAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

async function debugContacts() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to MongoDB');

        const Contact = mongoose.model('Contact', contactSchema);

        // Check total contacts
        const totalContacts = await Contact.countDocuments({});
        console.log('Total contacts in database:', totalContacts);

        // Check status distribution
        const statusCounts = await Contact.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);
        console.log('Status distribution:', statusCounts);

        // Get all contacts with their status
        const allContacts = await Contact.find({}, 'name email status').limit(10);
        console.log('Sample contacts:', allContacts);

        // Check for contacts without status
        const contactsWithoutStatus = await Contact.find({ status: { $exists: false } });
        console.log('Contacts without status field:', contactsWithoutStatus.length);

        // Check for null status
        const contactsWithNullStatus = await Contact.find({ status: null });
        console.log('Contacts with null status:', contactsWithNullStatus.length);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Connection closed');
    }
}

debugContacts();