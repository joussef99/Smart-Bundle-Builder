import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import AppHeader from "./components/AppHeader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppHeader />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </StrictMode>,
);
