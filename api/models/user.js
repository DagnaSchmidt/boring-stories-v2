import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    username: {
        type: String,
        required: true,
        minLength: 3,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const User = mongoose.model('User', userSchema);
export default User;
