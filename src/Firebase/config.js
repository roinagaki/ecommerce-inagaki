import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXY3PjODlPVJ1GvtEsdqLu_zt6cvswrAk",
  authDomain: "ecommerce-inagaki.firebaseapp.com",
  projectId: "ecommerce-inagaki",
  storageBucket: "ecommerce-inagaki.appspot.com",
  messagingSenderId: "853773713699",
  appId: "1:853773713699:web:eb8f666da7c1a686304c96"
};


const app = initializeApp(firebaseConfig);

export default function getFirestorApp() {
    return app
}