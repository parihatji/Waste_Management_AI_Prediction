
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const COMPLAINTS = [
  {
    id: 1,
    lat: 19.0760,
    lon: 72.8777,
    label: "Overflowing bin",
    status: "Pending",
    imageUrl: "https://example.com/photo1.jpg"
  }
];

function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8777, 19.0760], // Mumbai example
      zoom: 12
    });

    COMPLAINTS.forEach((report) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.width = "24px";
      el.style.height = "24px";
      el.style.background = "red";
      el.style.borderRadius = "50%";
      el.style.border = "2px solid white";
      el.title = `${report.label} (${report.status})`;

      new mapboxgl.Marker(el)
        .setLngLat([report.lon, report.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<strong>${report.label}</strong><br>Status: ${report.status}<br><img src="${report.imageUrl}" width="100"/>`
            )
        )
        .addTo(map.current);
    });
  }, []);

  return <div ref={mapContainer} className="mapContainer" />;
}

function ChatbotSidebar() {
  return (
    <div className="chatbotSidebar">
      <h3>🧑‍💻 AI Chatbot</h3>
      <div className="chatWindow">
        <div className="message bot">Hello! How can I help with your waste issue today?</div>
        {/* Add more messages here */}
      </div>
      <input className="chatInput" placeholder="Type your issue..." />
      <button className="sendBtn">Send</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MapComponent />
      <ChatbotSidebar />
    </div>
  );
}

export default App;

/* src/App.css */

.App {
  display: flex;
  height: 100vh;
}

.mapContainer {
  flex: 2;
  min-width: 0;
  height: 100vh;
}

.chatbotSidebar {
  flex: 1;
  background: #f7f7f7;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
}

.chatWindow {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 12px;
}

.message.bot {
  background: #e0f7fa;
  margin: 8px 0;
  padding: 8px;
  border-radius: 6px;
}

.chatInput {
  padding: 8px;
  margin-bottom: 6px;
  width: 100%;
  box-sizing: border-box;
}

.sendBtn {
  padding: 8px;
  width: 100%;
  background: #007bff;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

