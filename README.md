🧠 Snappy - Realtime MERN Chat App 💬⚡
Snappy is a full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Socket.IO for seamless, real-time communication.
This project demonstrates real-time messaging between users with a responsive UI and robust backend authentication — ideal for chatting with friends or collaborating in real-time!


🚀 Features
✅ User Authentication
Secure Sign up & Login using bcrypt password hashing
Email & Username validation with error handling

✅ Real-Time Messaging
Instant messaging with Socket.IO
Live typing and message delivery experience

✅ Avatar/Profile Setup
Users can upload or choose an avatar image
Profile image saved as a base64 string and displayed in chats

✅ Modern UI
Clean and responsive chat UI built with React
Supports light/dark theme switching (optional)

✅ Contacts List
View all registered users (except current user)
Click to start chatting with any user

✅ Persistent Messages (optional)
Messages remain even after refreshing (if integrated with MongoDB)

🛠️ Tech Stack
1. Frontend - HTML,CSS,JS, React.js
2. Backend - Node.js,express.js
3. Database - Mongodb

🔐 Authentication Flow
1. User signs up with username, email, and password.
2. Password is hashed securely with bcrypt before storing in MongoDB.
3. During login, bcrypt compares the entered password with the hashed version.
4. If authenticated, the user is allowed to access the chat interface.

📦 Installation & Setup
Clone the repository
git clone https://github.com/Sahil-Nitjit/chat-app.git
cd chat-app

Install dependencies
1. For backend:
   bcrypt
   cors
   dotenv
   express
   mongoose
   nodemon
   socket.io

3. For frontend:
   react
   react-icons
   react-dom
   react-router-dom
   react-toastify
   socket.io-client
   styled-components
   emoji-picker-react
   axios
   buffer
   uuid

⚠️ Create .env files in both server and public folders with your own MONGO_URL, PORT, REACT_APP_LOCALHOST_KEY if needed. ⚠️

Run the app
Start backend command:
     npm start

Start frontend command:
      npm start
      
💡 Screenshots
Login Page
<img width="90" height="141" alt="image" src="https://github.com/user-attachments/assets/1f67abde-817b-4181-8a1c-25fb5ec57c2b" />

Chat Dashboard
<img width="120" height="100" alt="image" src="https://github.com/user-attachments/assets/548bf4fc-3221-4261-ae15-4520a4b3898f" />

Real-Time Chat Interface
<img width="120" height="100" alt="image" src="https://github.com/user-attachments/assets/01e9be11-7116-4b7b-a45d-2b1d6aa51e9d" />

📌 Future Improvements
    ✅ Emoji support
    🕓 Message timestamps
    🧾 Chat history storage
    📤 File & image sharing
    🔔 Notifications
    🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
