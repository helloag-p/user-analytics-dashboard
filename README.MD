# 📊 User Analytics Dashboard

A full-stack user analytics application that tracks user interactions on a webpage and visualizes session activity through an interactive dashboard.

---
## ✅ Checklist

### Event Tracking

- ✔ Track `page_view`
- ✔ Track `click`
- ✔ Persist `sessionId` using localStorage
- ✔ Capture page URL
- ✔ Capture timestamp
- ✔ Capture click x/y coordinates
- ✔ Send events to backend API

### Backend APIs

- ✔ Receive and store events
- ✔ Fetch sessions with total event counts
- ✔ Fetch ordered events for a session
- ✔ Fetch click coordinates for heatmap visualization

### Database

- ✔ MongoDB with structured Event schema
- ✔ Indexed fields for efficient querying

### Dashboard

- ✔ Sessions View
- ✔ User Journey Timeline
- ✔ Heatmap View with page selection

---

## 🌐 Live Deployment

### 📊 Analytics Dashboard (Frontend)

https://user-analytics-dashboard-one.vercel.app/

Interactive dashboard for viewing:

- Sessions
- User Journey Timeline
- Click Heatmap
- Analytics Summary

---

### 🛍️ Demo Website

https://user-analytics-dashboard-h6xa.vercel.app/

Sample webpage integrated with the Analytics Tracker SDK.

Interact with the buttons on this page to automatically generate:

- Page View events
- Click events
- Session data

These events are immediately available in the Analytics Dashboard.

---

### ⚙️ Backend API

Health Check:

https://user-analytics-dashboard-ran8.onrender.com/api/health

Base API:

https://user-analytics-dashboard-ran8.onrender.com/api

---

## 🚀 Features

### 1. Client-Side Event Tracking

A lightweight, reusable JavaScript tracking SDK (`tracker.js`) captures user interactions and sends them to the backend API.

**Tracked Events**

- ✅ Page Views
- ✅ Click Events
- ✅ Session Management using localStorage
- ✅ Automatic Timestamp Collection
- ✅ Click Coordinate Tracking (`x`, `y`)

### 2. Interactive Analytics Dashboard

- 👥 Sessions View with total event counts
- 🛤️ User Journey timeline
- 🔥 Click Heatmap visualization
- 📊 Overall analytics summary

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Client Tracking
- Vanilla JavaScript
- localStorage API
- Fetch API

### Deployment
- Vercel (Frontend & Demo)
- Render (Backend)

---

## 📁 Project Structure

```
user-analytics-dashboard/
│
├── backend/                     # Express REST API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── package.json
│   └── server.js
│
├── frontend/                    # React Analytics Dashboard
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── tracker/                     # Standalone reusable Analytics SDK
│   └── tracker.js
│
├── demo/                        # Demo website using tracker.js
│   ├── index.html
│   └── tracker.js
│
└── README.md
```

---

## 📦 Project Components

### Tracker SDK

The `tracker/` directory contains a standalone analytics script that can be embedded into any webpage.

It automatically:

- Generates a unique Session ID
- Stores it in localStorage
- Tracks page views
- Tracks click events
- Sends analytics data to the backend

Example usage:

```html
<script src="tracker.js"></script>
```

---

### Demo Website

Live Demo:

https://user-analytics-dashboard-h6xa.vercel.app/

The `demo/` folder contains a simple sample webpage used for generating analytics data.

A copy of `tracker.js` is included inside the demo folder to simplify static deployment and hosting on platforms like **Vercel**, allowing the demo website to function independently without external asset dependencies.

This demonstrates how the tracker SDK can be integrated into a real webpage.


---

## ⚙️ Local Setup

### Clone Repository

```bash
git clone https://github.com/helloag-p/user-analytics-dashboard.git

cd user-analytics-dashboard
```

---

### Backend

```bash
cd backend

npm install

npm run dev
```

Create `.env`

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Create `.env`

```
VITE_API_URL=http://localhost:5000/api
```

---

### Demo Website

Open

```
demo/index.html
```

using Live Server or any static server.

Every page load and click automatically generates analytics events.

---

## 📡 REST API

| Method | Endpoint | Description |
|------------|----------------------------------|-------------------------------|
| POST | `/api/events` | Store tracking event |
| GET | `/api/sessions` | Fetch all sessions |
| GET | `/api/sessions/:id/events` | Fetch session timeline |
| GET | `/api/heatmap?pageUrl=...` | Fetch heatmap click data |

---

## 🗄️ Database Schema

### Event

```js
{
    sessionId: String,
    eventType: "page_view" | "click",
    pageUrl: String,
    timestamp: Date,
    click: {
        x: Number,
        y: Number
    }
}
```

Indexed Fields

- sessionId
- pageUrl

for efficient querying.

---

## 🔄 System Architecture

```
               +----------------------+
               |   Demo Website       |
               |  (tracker.js SDK)    |
               +----------+-----------+
                          |
                          |
                          v
               +----------------------+
               |   Express Backend    |
               |    REST API          |
               +----------+-----------+
                          |
                          |
                          v
               +----------------------+
               |      MongoDB         |
               +----------+-----------+
                          ^
                          |
                          |
               +----------------------+
               | React Dashboard      |
               | Sessions + Timeline  |
               | Heatmap Analytics    |
               +----------------------+
```

---

## 🧠 Engineering Decisions

### Assumptions

- A user session is uniquely identified by a UUID stored in localStorage.
- Every page load generates one `page_view` event.
- Every click on the document generates one `click` event.
- Events are stored independently for efficient querying and visualization.
- The demo page is intended solely for generating analytics data.

### Trade-offs

- localStorage is used instead of cookies for simpler session persistence.
- Heatmap visualization is implemented using lightweight positioned DOM elements instead of a dedicated canvas library.
- REST APIs are used instead of WebSockets since real-time synchronization is outside the assignment scope.
- A copy of `tracker.js` is included inside the `demo` directory to enable independent deployment of the demo website without external script dependencies.

### Future Improvements

- Real-time updates using WebSockets
- Date filtering
- Device/browser analytics
- Heat intensity visualization
- Session replay support

---

## 🚀 Deployment

| Component | Platform | URL |
|------------|------------|------------------------------------------------|
| Frontend Dashboard | Vercel | https://user-analytics-dashboard-one.vercel.app/ |
| Demo Website | Vercel | https://user-analytics-dashboard-h6xa.vercel.app/ |
| Backend API | Render | https://user-analytics-dashboard-ran8.onrender.com/api |
| Health Check | Render | https://user-analytics-dashboard-ran8.onrender.com/api/health |

---

## 👨‍💻 Author

**Parv Agarwal**

GitHub: https://github.com/helloag-p

LinkedIn: https://linkedin.com/in/parv-agarwal-09b042215