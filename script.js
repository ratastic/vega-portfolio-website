document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("takeQuizButton");
    const button1 = document.getElementById("continueToQuiz");
    const button2 = document.getElementById("styleButton");
    const button3 = documer.getElementById("outcomeButton");
  
    if (button) {
      button.addEventListener("click", function() {
        window.location.href = "quizStartPage.html";
      });
    }
  
    if (button1) {
      button1.addEventListener("click", function() {
        window.location.href = "quizFoodDrink.html";
      });
    }

    if (button2) {
        button2.addEventListener("click", function() {
          window.location.href = "quizStylePage.html";
        });
      }

      if (button3) {
        button3.addEventListener("click", function() {
          window.location.href = "quizResultPage.html";
        });
      }
  });