import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDonFWpWhUKwTDd4HFexDaFnpJV1NPWZbw",
  authDomain: "a-photoshop.firebaseapp.com",
  projectId: "a-photoshop",
  storageBucket: "a-photoshop.appspot.com",
  messagingSenderId: "158276839817",
  appId: "1:158276839817:web:70cbea94813473c9285958"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);