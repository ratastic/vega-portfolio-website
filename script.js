let answers = {
  sweet: false,
  savory: false,
  bread: false,
  noodles: false,
  soup: false,
  noSoup: false,
  meat: false,
  noMeat: false,
  meal: false,
  snack: false,
  light: false,
  filling: false,
  iced: false,
  hot: false,
  milk: false,
  noMilk: false,
};

function toggleButtonStyles(selectedId, otherId) {
  const selected = document.getElementById(selectedId);
  const other = document.getElementById(otherId);

  if (selected) selected.style.backgroundColor = "#9bdd4a"; 
  if (other) other.style.backgroundColor = "#ff007f"; 
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("takeQuizButton");
  const button1 = document.getElementById("continueToQuiz");
  const button2 = document.getElementById("retakeQuiz");
  const button3 = document.getElementById("outcomeButton");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "quizStartPage.html";
    });
  }

  if (button1) {
    button1.addEventListener("click", function () {
      const name = document.getElementById("name").value;
      localStorage.setItem("userName", name);
      window.location.href = "quizFoodDrink.html";
    });
  }

  if (button2){
    button2.addEventListener("click", function (){
    window.location.href = "quizFoodDrink.html";
    });

  }

  if (button3) {
    button3.addEventListener("click", function () {
      localStorage.setItem("foodDrinkAnswers", JSON.stringify(answers));
      window.location.href = "quizResultPage.html";
    });
  }

  if (window.location.href.includes("quizResultPage.html")) {
    const answers = JSON.parse(localStorage.getItem("foodDrinkAnswers"));
    const name = localStorage.getItem("userName");

    let foodRec = "";

    if (
      answers?.filling &&
      answers.soup &&
      answers.noodles &&
      answers.savory &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "beef cart noodles"; // works
    } else if (
      answers?.light &&
      answers.soup &&
      answers.bread &&
      answers.savory &&
      !answers.meat &&
      answers.meal
    ) {
      foodRec = "plain congee with you tiao"; // works
    } else if (
      answers?.filling &&
      !answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      answers.meal
    ) {
      foodRec = "hong kong-styled french toast"; // works
    } else if (
      answers?.light &&
      answers.soup &&
      !answers.bread &&
      !answers.sweet &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "pork congee with century egg"; // works
    } else if (
      answers?.light &&
      answers.soup &&
      answers.noodles &&
      answers.sweet &&
      !answers.meat &&
      answers.snack
    ) {
      foodRec = "mango pomelo sago"; // works
    } else if (
      answers?.filling &&
      !answers.soup &&
      answers.noodles &&
      answers.savory &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "cha siu fan"; // works
    } else if (
      answers?.filling &&
      !answers.soup &&
      answers.noodles &&
      !answers.sweet &&
      answers.meat &&
      answers.snack
    ) {
      foodRec = "cheung fun with fishballs and siu mai"; // works
    } else if (
      answers?.light &&
      !answers.soup &&
      answers.noodles &&
      answers.sweet &&
      !answers.meat &&
      answers.snack
    ) {
      foodRec = "cheung fun"; // works
    } else if (
      answers?.filling &&
      answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      answers.meal
    ) {
      foodRec = "mango pancake"; //works
    } else if (
      answers?.light &&
      !answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      answers.snack
    ) {
      foodRec = "dan tat"; // works
    } else if (
      answers?.light &&
      !answers.soup &&
      answers.bread &&
      !answers.savory &&
      answers.meat &&
      answers.snack
    ) {
      foodRec = "cha siu bao"; //works
    } else if (
      answers?.light &&
      !answers.soup &&
      answers.bread &&
      answers.savory &&
      answers.meat &&
      answers.snack
    ) {
      foodRec = "cheung zai bao"; 
    } else if (
      answers?.light &&
      answers.soup &&
      answers.noodles &&
      answers.savory &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "macaroni soup with spam"; // works
    } else if (
      answers?.filling &&
      !answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      answers.snack
    ) {
      foodRec = "pineapple bun with a slice of butter"; // works
    } else {
      foodRec = "dim sum";
    }

    let drinkRec = "";
    if (answers?.iced && answers.milk) {
      drinkRec = "red bean ice";
    } else if (answers?.hot && answers.noMilk) {
      drinkRec = "hot lemon tea";
    } else if (answers?.iced && answers.noMilk) {
      drinkRec = "iced lemon tea";
    } else if (answers?.hot && answers.milk) {
      drinkRec = "hong kong milk tea";
    } else {
      drinkRec = "something refreshing";
    }

    const resultText = document.getElementById("resultText");
    if (resultText) {
      if (foodRec === "dim sum") {
        resultText.textContent = `hi ${name}, you should try dim sum and ${drinkRec}.`;
      } else {
        resultText.textContent = `hi ${name}, the food and drink I'd recommend to you are ${foodRec} and ${drinkRec}.`;
      }
    }
  }
});

function sweetAnswer() {
  answers.sweet = true;
  answers.savory = false;
  toggleButtonStyles("sweetButton", "savoryButton");
}
function savoryAnswer() {
  answers.savory = true;
  answers.sweet = false;
  toggleButtonStyles("savoryButton", "sweetButton");
}
function breadAnswer() {
  answers.bread = true;
  answers.noodles = false;
  toggleButtonStyles("breadButton", "riceButton");
}
function riceAnswer() {
  answers.noodles = true;
  answers.bread = false;
  toggleButtonStyles("riceButton", "breadButton");
}
function soupAnswer() {
  answers.soup = true;
  answers.noSoup = false;
  toggleButtonStyles("soupButton", "noSoupButton");
}
function noSoupAnswer() {
  answers.noSoup = true;
  answers.soup = false;
  toggleButtonStyles("noSoupButton", "soupButton");
}
function meatAnswer() {
  answers.meat = true;
  answers.noMeat = false;
  toggleButtonStyles("meatButton", "noMeatButton");
}
function noMeatAnswer() {
  answers.noMeat = true;
  answers.meat = false;
  toggleButtonStyles("noMeatButton", "meatButton");
}
function mealAnswer() {
  answers.meal = true;
  answers.snack = false;
  toggleButtonStyles("mealButton", "snackButton");
}
function snackAnswer() {
  answers.snack = true;
  answers.meal = false;
  toggleButtonStyles("snackButton", "mealButton");
}
function lightAnswer() {
  answers.light = true;
  answers.filling = false;
  toggleButtonStyles("lightButton", "fillingButton");
}
function fillingAnswer() {
  answers.filling = true;
  answers.light = false;
  toggleButtonStyles("fillingButton", "lightButton");
}
function icedAnswer() {
  answers.iced = true;
  answers.hot = false;
  toggleButtonStyles("icedButton", "hotButton");
}
function hotAnswer() {
  answers.hot = true;
  answers.iced = false;
  toggleButtonStyles("hotButton", "icedButton");
}
function milkAnswer() {
  answers.milk = true;
  answers.noMilk = false;
  toggleButtonStyles("milkButton", "noMilkButton");
}
function noMilkAnswer() {
  answers.noMilk = true;
  answers.milk = false;
  toggleButtonStyles("noMilkButton", "milkButton");
}
