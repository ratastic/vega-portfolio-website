const button = document.getElementById("takeQuizButton");
const button1 = document.getElementById("continueToQuiz");

button.addEventListener("click", function(){
    window.location.href = "quizStartPage.html";
});

button1.addEventListener("click", function(){
    window.location.href = "quizPage1.html";
});