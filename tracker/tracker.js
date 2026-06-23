const API_URL = "https://user-analytics-dashboard-ran8.onrender.com/api/events";

function getSessionId() {
    let sessionId = localStorage.getItem("analytics_session");

    if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem("analytics_session", sessionId);
    }

    return sessionId;
}

function sendEvent(eventData) {
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
        keepalive: true,
    }).catch((error) => {
        console.error("Analytics Event Failed:", error);
    });
}

const sessionId = getSessionId();

function trackPageView() {
    sendEvent({
        sessionId,
        eventType: "page_view",
        pageUrl: window.location.pathname,
        timestamp: new Date().toISOString(),
    });
}

function trackClick(event) {
    sendEvent({
        sessionId,
        eventType: "click",
        pageUrl: window.location.pathname,
        timestamp: new Date().toISOString(),
        click: {
            x: event.clientX,
            y: event.clientY,
        },
    });
}

let initialized = false;

function initTracker() {
    if (initialized) return;

    initialized = true;

    trackPageView();

    document.addEventListener("click", trackClick);
}

document.addEventListener("DOMContentLoaded", initTracker);