# MERN-Based Chat Application

## Overview

This is an academic project developed for the Data Communication and Computer Networks subject. The application is a real-time chat platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Project Status

⚠️ **Note:** This project is currently under development.

## Features

- Real-time messaging
- User authentication
- Message history
- User profiles
- Group chat functionality

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and messages
- **Express.js**: Backend web application framework
- **React.js**: Frontend library for building the user interface
- **Node.js**: JavaScript runtime environment for the server
- **Socket.io**: Library for real-time, bidirectional communication

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/mern-chat-app.git
```

2. Install dependencies for the server

```bash
cd mern-chat-app/server
npm install
```

3. Install dependencies for the client

```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the server

```bash
cd ../server
npm start
```

6. Start the client

```bash
cd ../client
npm start
```

## Project Structure

```
mern-chat-app/
├── client/             # React frontend
├── server/             # Node.js backend
│   ├── controllers/    # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── server.js       # Entry point
└── README.md           # Project documentation
```

## Academic Purpose

This project is being developed as part of the coursework for Data Communication and Computer Networks. It demonstrates practical implementation of networking concepts including:

- Client-server architecture
- WebSocket communication
- HTTP/HTTPS protocols
- Data persistence
- Authentication and security

## Future Enhancements

- End-to-end encryption
- File sharing capabilities
- Voice and video calls
- Mobile application

## Contributors

- [Your Name]
- [Team Member 1]
- [Team Member 2]

## License

This project is for academic purposes only.
