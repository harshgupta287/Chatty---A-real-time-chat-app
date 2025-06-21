# MERN Real-Time Chat App

A feature-rich real-time chat application built with the MERN stack and Socket.IO, offering seamless and instant communication.

## 🔗 Live Demo

👉 [Check out the live demo here](https://chatty-a-quick-chat-app.onrender.com/)

## ✨ Features

* **Real-time Messaging:** Instant message delivery and updates using WebSockets (Socket.IO).
* **User Authentication:** Secure user registration and login.
* **User Presence:** See which users are online/offline.
* **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
* **Modern UI:** Clean and intuitive user interface built with Tailwind CSS and DaisyUI.

## 🚀 Technologies Used

This application leverages the following technologies:

### Frontend:
- **React.js:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **DaisyUI:** A Tailwind CSS component library that adds pre-built UI components.
- **Socket.IO Client:** For real-time, bidirectional event-based communication.

### Backend:
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **Socket.IO:** A library that enables real-time, bidirectional, event-based communication.

### Database:
- **MongoDB:** A NoSQL database program, providing high performance, high availability, and easy scalability.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.

## 📦 Installation & Setup

Follow these steps to set up and run the application locally:

### 1. Clone the repository

```bash
git clone <[your-repository-url](https://github.com/harshgupta287/Chatty---A-real-time-chat-app.git)>
cd <Chatty---A-real-time-chat-app>
```

---

### 2. Backend Setup

Navigate into the backend (or server) directory and install the dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and add your environment variables:

**Example `.env` file:**
```
MONGODB_URI=
PORT=5001
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NODE_ENV=development
```

> Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., `mongodb+srv://user:password@cluster0.abcde.mongodb.net/chat-app?retryWrites=true&w=majority`).  
> Replace `your_jwt_secret_key` with a strong, random string for JWT token signing.

---

### 3. Frontend Setup

Navigate into the frontend (or client) directory and install the dependencies:

```bash
cd ../frontend
npm install
```

If your backend is running on a different port than the frontend expects (e.g., frontend on 3000, backend on 5000), you might need to configure a proxy in your `package.json` or set the API URL in your frontend code.

---

## ▶️ How to Run

### 1. Start the Backend Server

From the backend directory:

```bash
npm run dev
```

> The backend server will typically run on [http://localhost:5001](http://localhost:5001) (or the port you defined in your `.env` file).

---

### 2. Start the Frontend Development Server

From the frontend directory:

```bash
npm run dev
```

> The frontend application will typically open in your browser at [http://localhost:3000](http://localhost:3000).

---

You should now have the MERN Real-Time Chat App running on your local machine! 🎉
