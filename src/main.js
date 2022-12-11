import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKXnwSQbYxu2QcEMub6-jLnkyJZBGDrUY",
  authDomain: "csc430proj.firebaseapp.com",
  projectId: "csc430proj",
  storageBucket: "csc430proj.appspot.com",
  messagingSenderId: "236866869041",
  appId: "1:236866869041:web:0bd8dff30f6b1131bf4210"
};

initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')
