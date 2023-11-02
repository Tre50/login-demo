import {initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlqsaVaGiFN-uaR-xKj870Wt5aHEY8RyU",
    authDomain: "fir-auth-tj.firebaseapp.com",
    projectId: "fir-auth-tj",
    storageBucket: "fir-auth-tj.appspot.com",
    messagingSenderId: "210591208001",
    appId: "1:210591208001:web:b4498b874aa22eceefecc0"
  }
  const app = intializeApp(firebaseConfig)
  
  export const auth = getAuth(app)