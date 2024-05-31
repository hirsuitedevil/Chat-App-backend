---

# Backend MERN Stack

## Table of Contents
1. [Introduction](#introduction)
2. [Setup and Run Instructions](#setup-and-run-instructions)
3. [API Routes](#api-routes)
    - [Auth Routes](#auth-routes)
    - [User Routes](#user-routes)
    - [Message Routes](#message-routes)
    - [Upload Routes](#upload-routes)
4. [Environment Configurations](#environment-configurations)

## Introduction
This repository contains the backend code for a MERN (MongoDB, Express, React, Node.js) stack application. The backend handles user authentication, messaging, file uploads, and real-time communication using Socket.IO.

## Setup and Run Instructions
### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=your_port_number
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Run the server:
   ```bash
   npm start
   ```

### Running the Server
```bash
npm start
```

The server will be running at `http://localhost:your_port_number`.

## API Routes

### Auth Routes
#### Register a New User
- **Endpoint**: `POST /auth/register`
- **Input**: 
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Output**: 
  ```json
  {
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "profileImg": ""
    },
    "token": "jwt_token"
  }
  ```

#### Login
- **Endpoint**: `POST /auth/login`
- **Input**: 
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Output**: 
  ```json
  {
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "profileImg": ""
    },
    "token": "jwt_token"
  }
  ```

#### Logout
- **Endpoint**: `POST /auth/logout`
- **Output**: 
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### User Routes
#### Get User Conversations
- **Endpoint**: `GET /users`
- **Headers**: 
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Output**: 
  ```json
  [
    {
      "participants": ["user_id_1", "user_id_2"],
      "messages": ["message_id_1", "message_id_2"],
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
  ```

#### Get User Details
- **Endpoint**: `GET /users/:id`
- **Headers**: 
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Output**: 
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "profileImg": ""
  }
  ```

### Message Routes
#### Send a Message
- **Endpoint**: `POST /messages/send/:id`
- **Headers**: 
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Input**: 
  ```json
  {
    "message": {
      "message": "Hello",
      "createdAt": "date"
    }
  }
  ```
- **Output**: 
  ```json
  {
    "senderId": "user_id_1",
    "receiverId": "user_id_2",
    "message": "Hello",
    "createdAt": "date",
    "conversationId": "conversation_id"
  }
  ```

#### Get Messages in a Conversation
- **Endpoint**: `GET /messages/:conversationId`
- **Headers**: 
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Output**: 
  ```json
  [
    {
      "senderId": "user_id_1",
      "receiverId": "user_id_2",
      "message": "Hello",
      "createdAt": "date"
    }
  ]
  ```

### Upload Routes
#### Upload an Image
- **Endpoint**: `POST /upload/image`
- **Headers**: 
  ```json
  {
    "Content-Type": "multipart/form-data"
  }
  ```
- **Input**: FormData with a file
- **Output**: 
  ```json
  {
    "message": "File uploaded"
  }
  ```

## Environment Configurations
Create a `.env` file in the root directory and configure the following variables:
- `PORT`: The port number for the server to run on.
- `MONGODB_URI`: The MongoDB connection string.
- `JWT_SECRET`: The secret key for JWT token signing.

---
