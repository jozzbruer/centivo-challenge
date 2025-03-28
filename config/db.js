import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Database connected: ${connection.connection.host}`);
	} catch (error) {
		console.log('connection failed');
	}
};

export default connectDB;
