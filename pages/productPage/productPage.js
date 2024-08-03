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


//   let productDetail = document.getElementById("productDetail");
//   let urlParams = new URLSearchParams(window.location.search);
//   let productId = urlParams.get('id');


//   if (productId) {
//     getDoc(doc(db, "products", productId)).then((docSnapshot) => {
//         if (docSnapshot.exists()) {
//             let product = docSnapshot.data();
//             let productHTML = `
//             <div class="flex flex-col md:flex-row">
//                 <div class="md:w-1/2">
//                     <img class="rounded-lg shadow-lg" src="${product.imageUrl}" alt="Product Image">
//                 </div>
//                 <div class="md:w-1/2 md:ml-10 mt-6 md:mt-0">
//                     <h2 class="text-3xl font-bold text-gray-800 mb-4">${product.name}</h2>
//                     <p class="text-2xl font-semibold text-gray-800 mb-4">RS ${product.price}</p>
//                     <p class="text-gray-600 mb-4">${product.description}</p>
//                     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Add to Cart</button>
//                 </div>
//             </div>`;
//             productDetail.innerHTML = productHTML;
//         } else {
//             productDetail.innerHTML += "<p>Product not found.</p>";
//         }
//     });
// } else {
//     productDetail.innerHTML = "<p>No product ID in URL.</p>";
// }


let parentProduct = document.getElementById("parentProduct")


let render = () => {
    getDocs(collection(db, "products")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let product = doc.data()
            let productHTML = `<div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
                <img class="rounded-lg shadow-lg" src="${product.imageUrl}" alt="Product Image">
            </div>
            <div class="md:w-1/2 md:ml-10 mt-6 md:mt-0">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">${product.name}</h2>
                <p class="text-2xl font-semibold text-gray-800 mb-4"> RS ${product.price}</p>
                <p class="text-gray-600 mb-4">${product.description}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Add to Cart</button>
            </div>
        </div> `
            parentProduct.innerHTML += productHTML
            })
            })
            }
            render()
            
