import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDD4G-hW1gqFiole5zWo7Om7-5En69b-Qo",
  authDomain: "funkopops-f6577.firebaseapp.com",
  projectId: "funkopops-f6577",
  storageBucket: "funkopops-f6577.appspot.com",
  messagingSenderId: "618896707644",
  appId: "1:618896707644:web:ac7c214cd5a1310bbcf339"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
