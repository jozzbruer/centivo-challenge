import validator from 'express-validator';
import User from '../models/user.model.js';
import { isValidObjectId } from 'mongoose';

export const addUser = async (request, response, next) => {
	const errors = validator.validationResult(request);

	if (!errors.isEmpty()) {
		return response.status(400).json({ errors: 'Invalid input, check again' });
	}
	try {
		const { name, email, age } = request.body;

		// check if user exists
		const userExists = await User.findOne({
			email,
		});
		if (userExists) {
			return response.status(400).json({ errors: 'User already exists' });
		}
		// create new user
		const newUser = new User({
			name,
			email,
			age,
		});
		await newUser.save();

		response
			.status(201)
			.json({ message: 'User added', user: { name, email, age } });
	} catch (error) {
		console.log(error);
		return response.status(500).json({ errors: 'Server error' });
	}
};

export const getUsersById = async (request, response, next) => {
	const { userId } = request.params;

	if (!isValidObjectId(userId)) {
		return response.status(400).json({ errors: 'Invalid user ID' });
	}
	try {
		const user = await User.findById(userId, '-__v');
		if (!user) {
			return response.status(404).json({ errors: 'User not found' });
		}
		if (user.age < 21) {
			return response.status(400).json({ errors: 'User is not old enough' });
		}
		response.status(200).json(user);
	} catch (error) {
		console.log(error);
		return response.status(500).json({ errors: 'Server error' });
	}
};
