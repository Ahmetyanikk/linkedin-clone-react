// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCExmYZf9Q8XP6PUS-eCvQqXF288yD7EtU",
    authDomain: "linkedin-clone-react-39181.firebaseapp.com",
    projectId: "linkedin-clone-react-39181",
    storageBucket: "linkedin-clone-react-39181.appspot.com",
    messagingSenderId: "460956991370",
    appId: "1:460956991370:web:cee5a3e877fbe2a73ad273",
    measurementId: "G-7P8528R4VD"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);



  export{db,auth};