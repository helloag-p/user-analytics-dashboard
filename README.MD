# 📊 User Analytics Dashboard

A full-stack user analytics application that tracks user interactions on a webpage and visualizes session activity through an interactive dashboard.

Built as part of the **CausalFunnel Full Stack Engineer Assignment**.

---

## 🚀 Features

### 1. Client-Side Event Tracking
A lightweight, drop-in JavaScript tracking script (`tracker.js`) that captures user interactions and transmits them to the backend API.
- **Page Views:** Tracks URL and timestamp on load.
- **Clicks:** Captures specific `x` and `y` coordinates for heatmap generation.
- **Session Management:** Automatically generates and persists a unique Session ID.

### 2. Interactive Analytics Dashboard
- **👥 Sessions View:** Displays all tracked user sessions, total event counts, and last activity timestamps.
- **🛤️ User Journey:** A chronological, interactive timeline showing exactly what a user did during their session (views, clicks, coordinates).
- **🔥 Click Heatmap:** Select any tracked page to visualize user click positions as a coordinate-mapped heatmap.

---

## 🏗️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Vite, Axios, Lucide React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)

---

## ⚙️ Local Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/helloag-p/user-analytics-dashboard
cd user-analytics
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm run dev
# Server will start on http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```
VITE_API_URL=http://localhost:5000/api
```

Start the dashboard:

```bash
npm run dev
# Dashboard will open on http://localhost:5173
```

### 4. Run the Demo Tracker

To generate test data, open `demo/index.html` using Live Server (or any local static server). Clicking around the page will automatically fire events to your local backend.

---

## 📡 API Documentation

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/events` | Receives and stores a new tracking event (view or click). |
| GET | `/api/sessions` | Returns a list of all unique sessions and their total event counts. |
| GET | `/api/sessions/:sessionId/events` | Returns an ordered chronological array of events for a specific session. |
| GET | `/api/heatmap?pageUrl=...` | Returns all click coordinates for a specific page URL. |

### Example Event Payload (POST `/api/events`)

```json
{
  "sessionId": "12345-uuid",
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

## 🗄️ Database Schema & Architecture

### Event Collection

Data is stored in a structured, query-optimized format in MongoDB:

- `sessionId` (String, Indexed)
- `eventType` (String: `'page_view'` | `'click'`)
- `pageUrl` (String, Indexed)
- `timestamp` (Date)
- `click.x` / `click.y` (Numbers, optional)

### System Flow

```
[ Demo Webpage ] --> (tracker.js) --> [ Express REST API ] --> [ MongoDB ]
                                               |
[ React Dashboard ] <--------------------------|
```

---

## 🧠 Engineering Decisions

### Assumptions

- A session is uniquely identified using a UUID stored in `localStorage` on the client side.
- The tracker is currently designed to run on a single-page demo application.
- Authentication is intentionally omitted to keep the architecture focused purely on the core analytics requirements.

### Trade-offs

- **Storage:** `localStorage` is used instead of cookies for simpler client-side session persistence without cross-origin cookie complexities.
- **Visualization:** The heatmap utilizes lightweight DOM elements (CSS circles) mapped to coordinates rather than importing a heavy, dedicated canvas visualization library. This keeps the bundle size small.
- **Data Fetching:** The dashboard fetches data on demand via REST rather than using real-time WebSockets, which is sufficient for the expected assignment dataset size.

### Future Improvements

- Implement WebSockets for a live, real-time analytics view.
- Add comprehensive filtering by date range and browser/device type.
- Implement pagination for the sessions list to handle massive datasets.

---

## 👨‍💻 Author

**Parv Agarwal** - Full Stack Developer

- [GitHub](https://github.com/helloag-p)
- [LinkedIn](https://www.linkedin.com/in/parv-agarwal-09b042215)