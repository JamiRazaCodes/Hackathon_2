// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
    getAuth,
    signOut,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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


let loginLink = document.getElementById("loginLink");
let uploadLink = document.getElementById("uploadLink");
let signupLink = document.getElementById("signupLink");
let logoutBtn = document.getElementById("logoutBtn");

function init() {
  let userObj = localStorage.getItem("user");
  userObj = JSON.parse(userObj);

  if (userObj) {
    loginLink.style.display = "none";
    signupLink.style.display = "none";
    if (userObj.userType === "admin") {
      uploadLink.style.display = "inline-block";
    }
    logoutBtn.className =
      "text-white mx-4 inline-block bg-blue-500 p-2 rounded";
  }
}
init();

window.logOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        init();
      })
      .catch((err) => {
        alert(err.message);
      });
      window.location.assign('index.html')
  };

  
  