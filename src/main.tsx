import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import liff from "@line/liff";

liff.init({
  liffId: import.meta.env.VITE_LIFT_ID ?? "", // Use own liffId
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
