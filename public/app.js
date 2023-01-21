// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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



function getUsersData  (){
  const reference = ref(db,"Data/")
  
  onChildAdded(reference, function(data){
    console.log(data.val())
    questions.push(data.val())
    console.log(questions)
    showQuestion() 
  })
}
getUsersData()


var questions = [
    {
      numb: 1,
      question: "What is the Full Form Of HTML?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Making Language",
        "Hyper Text Markup Language",
        "Hyper Testing make Lan",
        "Hyper Text madein Line",
      ],
    },
    {
      numb: 2,
      question: "What is the Full form of CSS?",
      answer: "Cascading Style Sheet ",
      options: [
        "Case Shinking Styling",
        "case Sensitive Stling",
        "Case Syling Sheet ",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What is the Full Form of JS?",
      answer: "JAVASCRIPT",
      options: [
        "JAVASCRIPT",
        "JAVASCENES",
        "JAVASCENES",
        "JOHNNYSINS",
      ],
    },
    {
      numb: 4,
      question: "Which tag is used for creating Lists?",
      answer: "<li>",
      options: [
        "ul",
        "li",
        "ol",
        "list",
      ],
    },
    {
      numb: 5,
      question: "who invented Microsoft?",
      answer: "Bill Gates",
      options: [
        "Bill Gates",
        "Leah Gotti",
        "Dani Daniels",
        "Erling Halland",
      ],
    },
    {
      numb: 6,
      question: "who invented Javascript?",
      answer: "Brenden Ech",
      options: [
        "Juan el Pobalo",
        "James Desling",
        "Brenden Ech",
        "Jordi Nino Pola",
      ],
    },
    {
      numb: 7,
      question: "which was the World's First Programming Language?",
      answer: "C++",
      options: [
        "C##",
        "Java",
        "Ruby",
        "Javascript",
      ],
    },
    
  ];
  var question = document.getElementById("question");
  var questionNum = document.getElementById("questionNum");
  var ansParent = document.getElementById("ansParent");
  var main = document.getElementById("main");
  var indexNum = 0;
  var marks = 0;
  
  function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML =
      "Question # " + (indexNum + 1) + "/" + questions.length;
      ansParent.innerHTML=''
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')
      " class="btn btn-secondary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`
    }
  }
  showQuestion();
  
  window.nextQuestion = function() {
    indexNum++;
    showQuestion();
  }
  
   window.checkAns = function(a, b) {
    if (a == b) {
      marks++;
    }
    if(indexNum + 1 == questions.length) {
        main.innerHTML=` <h1 class="text-white bg-danger border border-secondary text-center">
        YOur Score is${marks}
        </h1>`
        console.log(marks)
    }else{
      nextQuestion();
    }
  }

  