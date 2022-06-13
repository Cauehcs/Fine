import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDh3xrB7w-JdtM5o4EpF4lsymY_yXvAjg8",
  authDomain: "fine-e6dea.firebaseapp.com",
  projectId: "fine-e6dea",
  storageBucket: "fine-e6dea.appspot.com",
  messagingSenderId: "770886926044",
  appId: "1:770886926044:web:16e4c9ac572bf883dfbe19",
  measurementId: "G-T5D8P9CK6S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
