import express from 'express';
import validation from 'express-validator';
import { addUser, getUsersById } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.post(
	'/user/add',
	[
		validation.check('name').isLength({ min: 3 }),
		validation.check('email').isEmail(),
		validation.check('age').isNumeric(),
	],
	addUser
);

userRoutes.get('/user/:userId', getUsersById);

export default userRoutes;
