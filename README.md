# PasswordManagerAppUsingDocker

# 🛠️ Password Manager App (Dockerized)  
A secure and easy-to-use Password Manager app built using the MERN stack, now fully Dockerized for better scalability and reproducibility.

---

## 🚀 **Live Demo (Non-Docker)**  
Older version: https://github.com/Sangeet96/Password_Manager_App

👉 Link : [Password Manager App](https://password-manager-app-frontend.vercel.app/)  

✅ This is the deployed version of the project **without Docker**.

---

## 🐳 **What I Did**
- **Dockerized the entire MERN app** into four containers:
  - **Backend:** Node.js + Express.js server.
  - **Frontend:** React.js interface.
  - **MongoDB:** Database container.
  - **Mongo Express:** Web-based MongoDB admin interface.
- **Created a custom Docker network** to allow seamless communication between the containers.
- **Used Docker Compose** to simplify multi-container orchestration with a single command.
- **Exposed Mongo Express** for database interaction.

---

## 🔥 **What I Learned**
- **Containerization:** 
  - Isolating services into separate containers.
  - Packaging the entire app into reusable and portable Docker images.
- **Networking:** 
  - Connecting multiple containers using Docker’s custom network.
  - Resolving inter-container communication issues.
- **Docker Compose:** 
  - Simplifying the multi-container setup using a `docker-compose.yml` file.
  - Running and managing all services with a single command.
- **Mongo Express:** 
  - Using Mongo Express to interact with the database through a web interface.
- **Scalability & Portability:** 
  - Making the app easier to deploy on any system with Docker installed.
  - Ensuring consistency across environments.

---
