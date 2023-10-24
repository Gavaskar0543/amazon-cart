// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,getFirestore} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCDyqTlR5RsNopBS1_4oZl7aGs0oeWDBQ",
  authDomain: "cmart-134ea.firebaseapp.com",
  projectId: "cmart-134ea",
  storageBucket: "cmart-134ea.appspot.com",
  messagingSenderId: "538895758110",
  appId: "1:538895758110:web:4ffa903e33e29b9566cf0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;