import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
 import {  getFirestore,
    collection,
    addDoc, 
    updateDoc,
    doc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

 import { getStorage, 
  ref,
   uploadBytesResumable, 
   getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

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

const imageUpload = () => {
  return new Promise((resolve, reject) => {
    const file = productImage.files[0];
    
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      prog.value = progress;

      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    }, (error) => {
      reject(error);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        resolve(downloadURL);
      });
    });
  });
};



window.uploadProduct = async () => {
  try {
      let obj = {
          name: productName.value,
          price: productPrice.value,
          description: productDescription.value,
          category: productCategory.value
      };
      let reference = collection(db, "products");
      let res = await addDoc(reference, obj);
      console.log("Document written with ID: ", res.id);
      
      // Upload image and update the object with the image URL
      let url = await imageUpload();
      obj.imageUrl = url;
      
      // Update the document with the image URL
      await updateDoc(doc(reference, res.id), {
          imageUrl: url
      });
      

      alert("Document successfully updated with image URL:", obj);
      
  } catch (err) {
      console.error("Error adding document: ", err);
  }
}

