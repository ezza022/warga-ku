import firebase from "firebase/app";
import "firebase/database"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDdA1eP0tpI9GKy349t5p74EfiMN7eO_lI",
  authDomain: "warga-ku.firebaseapp.com",
  projectId: "warga-ku",
  storageBucket: "warga-ku.appspot.com",
  messagingSenderId: "1078413496282",
  appId: "1:1078413496282:web:9365a739c55b1f54903ae3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();

export default firebase;
