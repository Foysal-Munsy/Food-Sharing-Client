# 🍽️ FoodieMoodie - Frontend

> A fullstack web application to reduce food waste by connecting food donors with recipients

[![Live](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://food-sharing-e49b8.web.app)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)]()

![Desktop View](https://i.ibb.co.com/G3kL1GNq/Foodi-Moddie-Desktop.png)
![Mobile View](https://i.ibb.co.com/gZRP0v59/Foodie-Moddie-Mobile.png)

## 🎯 What it does

FoodieMoodie tackles food waste by creating a platform where people can donate surplus food to those in need. Users can easily list available food items, browse donations, and request food - all while contributing to a more sustainable community.

**🔗 [Live](https://food-sharing-e49b8.web.app)** • **🔧 [Backend Repository](https://github.com/Foysal-Munsy/Food-Sharing-Server)**

## ✨ Key Features

- 🍕 **Food Donation System** - Add food donations with photos, descriptions, and expiry dates
- 🔍 **Smart Food Search** - Search food by name, location, or category
- ⏰ **Expiry Date Sorting** - Sort foods by expiration date to prioritize urgent donations
- 📝 **Food Management** - Update and delete your food donations
- 🙏 **Food Request System** - Request food items from donors
- 🔐 **Dual Authentication** - Firebase Auth + JWT for enhanced security
- 🌙 **Dark/Light Mode** - Toggle between themes for better user experience
- 📱 **Responsive Design** - Seamless experience across all devices
- ⚡ **Real-time Updates** - Live notifications for new donations and requests
- 🗂️ **Pagination** - Efficient browsing of large food lists

## 🛠️ Built With

**Frontend Framework:**

- React 19.1.0
- React Router 7.6.3

**Styling & UI:**

- Tailwind CSS 4.1.11
- DaisyUI 5.0.50
- Material-UI 7.3.1
- Framer Motion 12.23.6

**Authentication & Database:**

- Firebase 11.10.0 (Authentication)
- JWT (Backend authentication)
- TanStack Query (Data fetching)
- Axios 1.10.0

**Additional Libraries:**

- Lucide React (icons)
- React Icons
- Lottie React (animations)
- SweetAlert2 (alerts)
- React Toastify (notifications)
- date-fns (date handling)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account (for authentication)

### Installation

```bash
# Clone the repository
git clone https://github.com/YourUserName/Food-Sharing-Client.git
cd Food-Sharing-Client

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Configure your Firebase settings

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Environment Setup

Create `.env.local` file with your Firebase configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id

# Backend API
VITE_API_URL=https://food-sharing-server-seven.vercel.app
```

## 🗺️ Application Routes

| Route              | Description                 | Auth Required |
| ------------------ | --------------------------- | ------------- |
| `/`                | Home page with hero section | ❌            |
| `/available-foods` | Browse all food donations   | ❌            |
| `/add-food`        | Add new food donation       | ✅            |
| `/my-foods`        | Manage your food donations  | ✅            |
| `/requested-foods` | View your food requests     | ✅            |
| `/details/:foodID` | Food item details page      | ✅            |
| `/update/:foodID`  | Edit food donation          | ✅            |
| `/login`           | User authentication         | ❌            |
| `/registration`    | Create new account          | ❌            |

## 📱 Features Overview

### **For Food Donors**

- Add food donations with photos, descriptions, and expiry dates
- Update or delete your food listings
- Manage incoming food requests from recipients
- Track your donation history and impact

### **For Food Recipients**

- Search available food by name, category, or location
- Sort food items by expiry date to find urgent donations
- Request specific food items from donors
- View request status and pickup details

### **Advanced Features**

- **Smart Search** - Find food by keywords, location, or dietary preferences
- **Expiry Sorting** - Prioritize foods that expire soon to reduce waste
- **Request Management** - Track all your food requests in one place
- **Responsive Design** - Perfect experience on mobile and desktop
- **Theme Switching** - Choose between dark and light modes

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components
│   ├── Home/
│   ├── AddFoods/
│   ├── AvailableFoods/
│   └── MyFoods/
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── context/            # Context providers
├── assets/             # Images and static files
└── App.jsx             # Main app component
```

## 🎨 Theme Support

FoodieMoodie includes beautiful dark and light themes:

- **Light Mode** - Clean, bright interface for daytime use
- **Dark Mode** - Easy on the eyes for evening browsing
- **Theme persistence** - Remembers your preference

## 🔧 Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Connect GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push

### Deploy on Netlify

1. **Build the project**
   ```bash
   npm run build
   ```
2. **Upload dist folder** to Netlify
3. **Configure environment variables** in Netlify dashboard

## 🌍 Impact

Every food donation through FoodieMoodie helps:

- Reduce food waste in communities
- Support people in need of meals
- Create a more sustainable food ecosystem
- Build stronger community connections

## 🤝 Contributing

We welcome contributions to help fight food waste!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/ReduceFoodWaste`)
3. Commit your changes (`git commit -m 'Add food waste analytics'`)
4. Push to the branch (`git push origin feature/ReduceFoodWaste`)
5. Open a Pull Request

### Ideas for Contribution

- Add more filtering options
- Improve accessibility features
- Create food waste statistics
- Add multilingual support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Foysal Munsy**

- 💼 LinkedIn: [https://www.linkedin.com/in/foysal-munsy](https://www.linkedin.com/in/foysal-munsy)
- 📧 Email: foysal613@outlook.com
