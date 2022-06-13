import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
