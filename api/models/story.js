import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique: true
    },
    prevImg: {
        type: String,
        required: true,
        unique: true
    },
    altText: {
        type: String,
        required: true
    },
    description: {
        type: String,
        minLength: 20,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    localization: {
        type: String,
        required: true,
        minLength: 2
    }
});

storySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Story = mongoose.model('Story', storySchema);
export default Story;
