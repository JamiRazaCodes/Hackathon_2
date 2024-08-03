import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { 
    getFirestore,
    collection,
    getDocs,    
    } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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


  let cartParent = document.getElementById("cartParent");

  let cart = () => {
    getDocs(collection(db, "products")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let product = doc.data()
            let productHTML = `<div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img class="w-20 h-20 rounded-md" src="${product.imageUrl}" alt="Product Image">
                            <div class="ml-4">
                                <h4 class="text-lg font-semibold" style="width: 300px;">${product.name}</h4>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg font-semibold">RS ${product.price}</p>
                            <input type="number" class="w-16 p-2 border border-gray-300 rounded" value="1">
                            <button class="text-red-500 hover:text-red-700 ml-2">Remove</button>
                        </div>
                    </div>`
                    cartParent      .innerHTML += productHTML
            })
            })
            }
           cart()