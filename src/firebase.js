import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8EPkIRAruF7hZ5Ejxk-GUtDE5MBEzccw",
  authDomain: "learning-188f8.firebaseapp.com",
  projectId: "learning-188f8",
  storageBucket: "learning-188f8.appspot.com",
  messagingSenderId: "227860808148",
  appId: "1:227860808148:web:ebe41d8e6a626668b4d641"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
