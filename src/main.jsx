import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the App component in a StrictMode to enable error boundaries
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
