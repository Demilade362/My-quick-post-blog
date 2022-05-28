import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD3ZLCSVJ6vGQY3gOpIHzGWIv7zY04qJSI",
    authDomain: "authproject-607e2.firebaseapp.com",
    projectId: "authproject-607e2",
    storageBucket: "authproject-607e2.appspot.com",
    messagingSenderId: "229449462261",
    appId: "1:229449462261:web:7f3bd31621f70da95fb0bc"
  };

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }