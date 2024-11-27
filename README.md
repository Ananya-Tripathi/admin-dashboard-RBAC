# Admin Dashboard - User Management System

This project is an **Admin Dashboard** built with **React**, **Firebase**, and **Firestore**. It allows users to manage users, roles, and permissions. The app lets you **add**, **edit**, and **delete** users, assign them **roles** (Admin, Editor, Viewer), and set **permissions** (Read, Write, Delete).

## Features

- **Add, Edit, Delete Users**: Manage users with roles and permissions.
- **Role Management**: Assign roles such as Admin, Editor, and Viewer.
- **Permissions**: Control user permissions (Read, Write, Delete).
- **Firebase Integration**: Data storage using Firestore, real-time updates.
- **Authentication**: Firebase Authentication for secure login.

---

## Prerequisites

Ensure you have the following tools installed before setting up the project:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Firebase Account**: [Create a Firebase project](https://console.firebase.google.com/).

---

## Installation & Setup

### 1. Clone the Repository

First, clone the repository to your local machine:
```
git clone https://github.com/Ananya-Tripathi/admin-dashboard-RBAC.git
cd admin-dashboard-RBAC`
```
## Install Dependencies
```
npm install
```
## Set up Firebase:
1.Create a Firebase project at Firebase Console.
2.In the Firebase project, enable Firestore and Authentication (Email/Password).
3.Add your Firebase config to firebaseConfig.js (replace the placeholder values with your actual Firebase credentials).
```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```
## Start the development server:
```
npm start
```
## Usage
Admin Panel:
Admin users can manage users, roles, and permissions.

Add/Manage Users:
Users can be added, edited, and deleted. Admin can assign roles like Admin, Editor, and Viewer.

Role and Permission Management:
Admin can assign permissions (Read, Write, Delete) to roles. Users are associated with roles.

![image](https://github.com/user-attachments/assets/7315981b-db46-4e69-9c41-a50d7bda5a04)
![image](https://github.com/user-attachments/assets/10e341df-6d66-4722-82c4-4a9c4fde20c1)
![image](https://github.com/user-attachments/assets/5cc72789-0e63-4737-a1e0-78de6abb7445)
![image](https://github.com/user-attachments/assets/3ba7390a-43e8-4773-8304-c832001b85db)





