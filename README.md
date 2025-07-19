# 🔐 Auth Template

A modern React + Vite authentication template with Firebase, styled using TailwindCSS. This template helps kickstart projects that require user authentication and beautiful UI animations.

## 🌐 Live Demo

[Visit the Live App](https://food-sharing-e49b8.web.app)

---

## 🎯 Purpose

The purpose of this website is to provide a modern, responsive, and animated frontend authentication system using React, Firebase, and TailwindCSS. It is designed to serve as the entry point or frontend interface for a web platform where users can:

-Sign up or log in securely via Firebase Authentication

-Navigate between different pages using React Router

-Receive instant feedback via toast notifications and SweetAlert modals

-Enjoy smooth UI/UX animations via Framer Motion

-View dynamic content like dates, images, and animations

---

## ⚙️ Key Features

- ✅ Firebase Authentication (Login/Register/Logout)
- ✅ Protected Routes using `react-router`
- ✅ Modern UI with **TailwindCSS**
- ✅ Toast notifications via **React Toastify**
- ✅ Animated transitions using **Framer Motion**
- ✅ Date formatting with **date-fns**
- ✅ Sweet Alerts with **SweetAlert2**
- ✅ Modular and scalable project structure
- ✅ Optimized for performance with **Vite**

---

## 📦 Used NPM Packages

### 🔧 Dependencies

| Package               | Description                              |
| --------------------- | ---------------------------------------- |
| **react**             | Frontend library for UI                  |
| **react-dom**         | React DOM bindings                       |
| **react-router**      | Routing system for React                 |
| **firebase**          | Firebase SDK (Authentication, Firestore) |
| **axios**             | Promise-based HTTP client                |
| **tailwindcss**       | Utility-first CSS framework              |
| **@tailwindcss/vite** | Tailwind integration with Vite           |
| **framer-motion**     | Animation library for React              |
| **lottie-react**      | Render Lottie animations                 |
| **date-fns**          | JavaScript date utility library          |
| **react-icons**       | Icon library for React                   |
| **react-toastify**    | Toast notifications                      |
| **sweetalert2**       | Modern alert system                      |

### 🛠 Dev Dependencies

| Package                         | Description                        |
| ------------------------------- | ---------------------------------- |
| **vite**                        | Lightning-fast frontend tooling    |
| **@vitejs/plugin-react**        | React plugin for Vite              |
| **eslint**                      | Code linter                        |
| **@eslint/js**                  | ESLint base rules                  |
| **eslint-plugin-react-hooks**   | React hooks linting                |
| **eslint-plugin-react-refresh** | Vite HMR plugin                    |
| **@types/react**                | TypeScript types for React         |
| **@types/react-dom**            | TypeScript types for React DOM     |
| **globals**                     | Shared global variable definitions |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/auth-template.git
cd auth-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

- Create a Firebase project.
- Enable **Authentication** (Email/Password or others).
- Copy your Firebase config and create a `.env` file:

```
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_MESSAGING_SENDER_ID=xxxxxx
VITE_APP_ID=xxxxxx
```

### 4. Start the development server

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── assets/
├── components/
├── contexts/
├── pages/
├── routes/
├── hooks/
├── App.jsx
├── main.jsx
└── ...
```

---

## 🧑‍💻 Author

- [Foysal Munsy](https://github.com/foysal-munsy)

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
