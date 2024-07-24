import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
 import {  getFirestore,
    collection,
    addDoc, } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

 import { getStorage, ref,  uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

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
const db = getFirestore();
const storage = getStorage();

let productName = document.getElementById('productName')
let productPrice = document.getElementById('productPrice')
let productDescription = document.getElementById('productDescription')
let productImage = document.getElementById('productImage')
let productCategory = document.getElementById('productCategory')

window.uplaodProduct = async () => {
  let obj = {
    name: productName.value,
    price: productPrice.value,
    description: productDescription.value,
    image: productImage.value,
    category: productCategory.value
    };
    
    let refrence = collection(db,"products");
    let res = await addDoc(refrence,obj);
    console.log(res.id);
    
}










// window.uplaod = async () => {
//     const file = document.getElementById("file").files[0];
//     const storageRef = ref(storage, "images/" + file.name);
//     const uploadTask = uploadBytesResumable(storageRef, file);
//     uploadTask.on("state_changed",
//         (snapshot) => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log("Upload is " + progress + "% done");
//             },
//             (error) => {
//                 console.log(error);
//                 },
//                 () => {
//                     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                         console.log("File available at", downloadURL);
//                         });
//                         }
//                         );
//                         };