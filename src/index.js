import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeProvider } from "./components/darkmode-provider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App className="dark transition-colors" />
    </DarkModeProvider>
  </React.StrictMode>
);
