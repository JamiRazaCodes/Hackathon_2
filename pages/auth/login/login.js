import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { 
    getAuth,
  signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 import {  getFirestore,
    doc,
    getDoc, } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE_SMncjREHN2c3yUNrZlgaiy_QckhOsY",
  authDomain: "hackathon-2-66a9f.firebaseapp.com",
  projectId: "hackathon-2-66a9f",
  storageBucket: "hackathon-2-66a9f.appspot.com",
  messagingSenderId: "591059771450",
  appId: "1:591059771450:web:ff3b71a4df4825a0435503",
  measurementId: "G-LDMK975GWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let email = document.getElementById("email");
let password = document.getElementById("password");

window.loginUser = () => {
    let obj = {
        email: email.value,
        password: password.value
    }

    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then (async(res) =>{
        const id = res.user.uid;
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            localStorage.setItem("user", JSON.stringify(docSnap.data()));
        window.location.replace("../../../index.html");
        } else {
            console.log("NOT FOUND");
            }
            })
            .catch((err) => {
                alert(err.meassage);
    })
}