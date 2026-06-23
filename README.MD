# 📊 User Analytics Dashboard

A full-stack user analytics application that tracks user interactions on a webpage and visualizes session activity through an interactive dashboard.

Built as part of the **CausalFunnel Full Stack Engineer Assignment**.

---

## 🚀 Live Features

### ✅ Event Tracking

A lightweight JavaScript tracking script captures user interactions and sends them to the backend.

Tracked Events:

- Page View (`page_view`)
- Click (`click`)

Each event contains:

- Session ID
- Event Type
- Page URL
- Timestamp
- Click Coordinates (x, y) for click events

---

## 📈 Dashboard Features

### 👥 Sessions View

- Displays all tracked user sessions
- Shows total event count for each session
- Displays last activity time
- Selecting a session loads its complete user journey

### 🛤️ User Journey

Chronological timeline showing:

- Page Views
- Click Events
- Page URL
- Click Coordinates
- Timestamp

### 🔥 Click Heatmap

- Select a page
- Visualize click positions as heatmap dots
- Displays total click count for the selected page

---

# 🏗️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- Lucide React
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Database

- MongoDB Atlas / Local MongoDB

---

# 📂 Project Structure

```
user-analytics/

│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │
│   │── api/
│   │── components/
│   │    ├── common/
│   │    ├── heatmap/
│   │    └── sessions/
│   │
│   │── layouts/
│   │── pages/
│   │── App.jsx
│   │── main.jsx
│   │
│   ├── .env
│   └── package.json
│
├── demo/
│   ├── index.html
│   └── tracker.js
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/your-username/user-analytics.git

cd user-analytics
```

---

# Backend Setup

Navigate to backend

```bash
cd backend

npm install
```

Create a `.env` file

```
PORT=5000

MONGODB_URI=your_mongodb_connection_string
```

Run backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend

npm install
```

Create `.env`

```
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Demo Tracking Script

Open

```
demo/index.html
```

using Live Server or any local server.

The tracker automatically:

- Generates a session ID
- Tracks page views
- Tracks clicks
- Sends events to backend

---

# API Documentation

---

## Track Event

### POST

```
POST /api/events
```

Request

```json
{
    "sessionId": "12345",
    "eventType": "click",
    "pageUrl": "/demo/index.html",
    "timestamp": "2026-06-23T14:30:00Z",
    "click": {
        "x": 240,
        "y": 320
    }
}
```

---

## Fetch Sessions

### GET

```
GET /api/sessions
```

Response

```json
[
    {
        "sessionId": "abc123",
        "totalEvents": 15,
        "lastActivity": "2026-06-23T18:00:00Z"
    }
]
```

---

## Fetch Session Events

### GET

```
GET /api/sessions/:sessionId/events
```

Response

```json
[
    {
        "eventType": "page_view",
        "pageUrl": "/demo/index.html"
    },
    {
        "eventType": "click",
        "click": {
            "x": 220,
            "y": 340
        }
    }
]
```

---

## Fetch Heatmap Data

### GET

```
GET /api/heatmap?pageUrl=/demo/index.html
```

Response

```json
[
    {
        "click": {
            "x": 120,
            "y": 250
        }
    },
    {
        "click": {
            "x": 280,
            "y": 420
        }
    }
]
```

---

# Database Schema

```
Event

├── sessionId
├── eventType
├── pageUrl
├── timestamp
└── click
      ├── x
      └── y
```

Indexes

- sessionId
- pageUrl
- sessionId + timestamp

for efficient querying.

---

# Architecture

```
User

│

▼

Tracking Script

│

▼

Express API

│

▼

MongoDB

│

▼

React Dashboard

│

├── Sessions
├── User Journey
└── Heatmap
```

---

# Assumptions

- A session is uniquely identified using a UUID stored in localStorage.
- The tracker runs on a single page demo application.
- Click heatmap is represented using visual dots rather than an external heatmap library.
- Data is fetched using REST APIs.
- Authentication is intentionally omitted to keep the assignment focused on analytics functionality.

---

# Trade-offs

- localStorage is used instead of cookies for simpler client-side session persistence.
- Heatmap uses lightweight CSS circles instead of a dedicated visualization library.
- Dashboard fetches data on demand rather than using real-time WebSockets.
- Pagination is omitted considering the expected assignment dataset size.

---

# Future Improvements

- Real-time analytics using WebSockets
- Authentication & User Management
- Advanced heatmap visualization
- Filtering by date range
- Session replay functionality
- Export analytics as CSV/PDF
- Dashboard charts and metrics
- Multi-page automatic detection

---

# Highlights

✔ Modern React Component Architecture

✔ Tailwind CSS Responsive UI

✔ RESTful Express APIs

✔ MongoDB Aggregation Pipelines

✔ Modular Backend Structure

✔ Interactive Session Timeline

✔ Click Heatmap Visualization

✔ Reusable Components

✔ Environment Variable Configuration

---

# Author

**Parv Agarwal**

Full Stack Developer

GitHub: https://github.com/helloag-p

LinkedIn: https://www.linkedin.com/in/parv-agarwal-09b042215

---