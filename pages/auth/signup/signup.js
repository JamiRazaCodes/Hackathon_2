import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { 
    getAuth,
  createUserWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 import {  getFirestore,
    doc,
    setDoc, } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

window.signupUser = () => {
    let obj = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        obj.id = res.user.uid;
        obj.userType = "user";
      
        const refrence = doc(db, "users", obj.id)
        setDoc(refrence, obj)
         .then(() => {
            const userObj = JSON.stringify(obj);
          localStorage.setItem("user", userObj);
          window.location.replace("../../../index.html");
         })
         .catch((err) =>{
            alert(err.message);
         });
    })
    .catch((err) => {
        alert(err.message);
    });
};