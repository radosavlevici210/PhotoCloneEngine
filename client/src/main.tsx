import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Add performance monitoring in development
if (process.env.NODE_ENV === 'development') {
  import('react-dom/profiling').then(() => {
    console.log('React profiling enabled');
  });
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);