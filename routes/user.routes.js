import express from 'express';
import validation from 'express-validator';
import { addUser, getUsersById } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.post(
	'/users/add',
	[
		validation.check('name').isLength({ min: 3 }),
		validation.check('email').isEmail(),
		validation.check('age').isNumeric(),
	],
	addUser
);

userRoutes.get('/users/:userId', getUsersById);

export default userRoutes;
