import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "YOUR_PROJECT",
  projectId: "YOUR PROJECT_ID",
  storageBucket: "YOUR PROJECT",
  messagingSenderId: " ",
  appId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
