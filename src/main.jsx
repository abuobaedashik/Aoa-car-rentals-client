import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import AuthProvider from "./Context/Authcontext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-[1920px] mx-auto">
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
