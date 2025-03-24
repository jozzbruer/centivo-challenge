import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	age: { type: Number, required: true },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

export default User;
