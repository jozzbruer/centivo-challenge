# Centivo Challenge

## Description

A brief project description for the Centivo challenge.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/centivo-challenge.git

# Navigate to project directory
cd centivo-challenge

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

## Environment Setup

Make sure to create your `.env` file from the example template and update the values:

```env
MONGODB_URI=mongodb://localhost:27017/centivo
```

## Usage

```bash
# Run the application
npm start
```

## API Endpoints

### Users

| Method | Endpoint      | Description       | Request Body           |
| ------ | ------------- | ----------------- | ---------------------- |
| POST   | /api/user/add | Create a new user | `{ name, email, age }` |
| GET    | /api/user/:id | Get user by ID    | -                      |

#### Request Body Examples:

```json
// POST /api/user/add
{
	"name": "John Doe",
	"email": "john@example.com",
	"age": 25
}
```

## Requirements

- Node.js >= 14.x
- npm >= 6.x
- MongoDB

## License

MIT
