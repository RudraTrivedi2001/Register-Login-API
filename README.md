# RegisterAndLogin API

A simple **Node.js + Express + MongoDB** API for user registration, login, and basic CRUD operations.

## 📁 Project Structure

RegisterAndLogin/
│── controllers/ (Handles user-related operations)  
│   └── user.controller.js  
│── database/ (Database connection settings)  
│   └── db.config.js  
│── model/ (User schema/model)  
│   └── user.model.js  
│── routes/ (API routes)  
│   └── route.js  
│── .gitignore (Files to be ignored by Git)  
│── index.js (Entry point of the application)  
│── package.json (Dependencies & scripts)  
│── package-lock.json (Package versions)  
│── README.md (Project documentation)  

## 🚀 Getting Started

### 1️⃣ Clone the Repository
`git clone https://github.com/RudraTrivedi2001/Register-Login-API.git`  
`cd RegisterAndLogin`  

### 2️⃣ Install Dependencies
`npm install`  

### 3️⃣ Set Up Environment Variables  
Create a `.env` file and add:  
`MONGO_URI=your_mongodb_connection_string`  
`PORT=5000`  

### 4️⃣ Run the Server  
`npm start`  

The server will start at **http://localhost:5000**  

## 📌 API Endpoints

### **🔹 User Routes**
| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| POST   | `/register`              | Register a new user         |
| POST   | `/login`                 | Login user                  |
| GET    | `/searchByEmail/:email`  | Get user by email           |
| DELETE | `/delete/:id`            | Delete user by ID           |

## 🛠 Technologies Used
- **Node.js** - Backend runtime  
- **Express.js** - Web framework  
- **MongoDB & Mongoose** - Database & ODM  
- **dotenv** - Environment variables  

## 📜 License  
This project is licensed under the **MIT License**.  

### ✨ Author  
👤 **Aniruddha Trivedi**  
📌 GitHub: [RudraTrivedi2001](https://github.com/RudraTrivedi2001)  

