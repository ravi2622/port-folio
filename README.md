# Ravi Vataliya Portfolio — MERN Stack

## Project Structure
```
portfolio-mern/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx / .css
│   │   │   ├── Hero.jsx / .css
│   │   │   ├── About.jsx / .css
│   │   │   ├── Skills.jsx / .css
│   │   │   ├── Projects.jsx / .css
│   │   │   ├── Education.jsx / .css
│   │   │   ├── Contact.jsx / .css
│   │   │   └── Footer.jsx / .css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── backend/           # Node.js + Express
    ├── models/
    │   └── Contact.js
    ├── routes/
    │   └── contact.js
    ├── server.js
    └── package.json
```

## Setup & Run

### 1. Backend
```bash
cd backend
npm install
# Create .env file (see below)
npm run dev        # starts on port 5000
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev        # starts on port 5173
```

### .env (backend)
```
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

## Production Build
```bash
cd frontend && npm run build
cd ../backend && NODE_ENV=production npm start
```
The Express server will serve the React build at the root.

## Features
- ✅ Smooth scroll single-page navigation
- ✅ Animated hero with floating code card
- ✅ Skills grid with hover effects
- ✅ Projects showcase with accent colors
- ✅ Education timeline
- ✅ Contact form → saved to MongoDB
- ✅ Responsive (mobile-first)
- ✅ Dark theme with purple/green accents
