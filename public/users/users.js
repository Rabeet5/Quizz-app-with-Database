// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-tqmLzFXsP2Hvb2RgLZGiHxjbeGvljeA",
  authDomain: "quizz-app-with-database.firebaseapp.com",
  projectId: "quizz-app-with-database",
  storageBucket: "quizz-app-with-database.appspot.com",
  messagingSenderId: "150469870648",
  appId: "1:150469870648:web:6079a1447fd85eeb0052cd",
  measurementId: "G-C5MJE203B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const db = getDatabase();



var addQuestion = document.getElementById('addQuestions')
var questionshere = document.getElementById('questionshere')
var addOptions = document.getElementById('addOptions')
var trueAnswersElem = document.getElementById('trueAnswers')

var options = [];
var answer;


function showOptions(){
    addOptions.innerHTML = ""
    for(var i = 0; i < options.length; i++){
        addOptions.innerHTML += `<li onclick="setTrueAns('${options[i]}')" class="my-3 rounded shadow fs-5 bg-light p-2 m-3  ">${options[i]}</li>` 
    }
}

window.addQuestions = function(){
    options.push (questionshere.value)
    console.log(options) ;
    showOptions();
}

window.setTrueAns = function(a){
    answer = a ;
    trueAnswersElem.innerHTML = answer;
}


window.submitQuestion = function(){
    var obj = {
        numb: 8,
        question: addQuestion.value,
        options : options,
        answer: answer,

    }
    obj.id = push(ref(db,"Data/")).key
    const reference = ref(db,`Data/${obj.id}`)
    set(reference,obj)
    console.log(obj)
}