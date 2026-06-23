import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/AppHeader.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </StrictMode>,
);
