import firebase from "firebase";
import 'firebase/auth' 
import 'firebase/firebase'
import'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAUcox1aTn3gS07QtWyLLWsoXTT5baevJ8",
  authDomain: "olx-clone-2e742.firebaseapp.com",
  projectId: "olx-clone-2e742",
  storageBucket: "olx-clone-2e742.appspot.com",
  messagingSenderId: "88045209910",
  appId: "1:88045209910:web:83f5b1deca344350b24b97",
  measurementId: "G-0PJ1PQXQDE"
};

export default firebase.initializeApp(firebaseConfig)