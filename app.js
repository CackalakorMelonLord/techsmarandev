var firebaseConfig = {
    apiKey: "AIzaSyAr4CvOVmeR6rOWt1l1WF6TIv1j72EMDsc",
    authDomain: "webapi-9d8a6.firebaseapp.com",
    databaseURL: "https://webapi-9d8a6-default-rtdb.firebaseio.com",
    projectId: "webapi-9d8a6",
    storageBucket: "webapi-9d8a6.appspot.com",
    messagingSenderId: "522803184200",
    appId: "1:522803184200:web:4b9997171d512df4f30e7d",
    measurementId: "G-KQ7MT013KB"
  };
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector("#userFullName");
let userEmail = document.querySelector("#userEmail");
let userMessage = document.querySelector("#userMessage");
let userBusiness = document.querySelector("#userBusiness");
let userYon = document.querySelector("#userYon");

const db = firestore.collection("contactDataTest");

submitBtn.addEventListener('click', function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;
    let userBusinessInput = userBusiness.value;
    let userYonInput = userYon.value;
    
    db.doc().set({
        name:userNameInput,
        email:userEmailInput,
        message:userMessageInput,
        business:userBusinessInput,
        yon:userYonInput
    }).then(function() {
        console.log("Data Saved");
        alert("Data Saved");
    }).catch(function(error) {
        console.log("error");
    });
});