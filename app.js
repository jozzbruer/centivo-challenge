import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

connectDB();

const app = express();

app.use((request, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	response.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});
app.use(express.json());

app.use('/api', userRoutes);

app.use((request, response, next) => {
	return response.status(404).json({ errors: 'Route not found' });
});

export default app;
