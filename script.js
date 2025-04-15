document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("takeQuizButton");
  const button1 = document.getElementById("continueToQuiz");
  const button2 = document.getElementById("styleButton");
  const button3 = document.getElementById("outcomeButton");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "quizStartPage.html";
    });
  }

  if (button1) {
    button1.addEventListener("click", function () {
      window.location.href = "quizFoodDrink.html";
    });
  }

  if (button2) {
    button2.addEventListener("click", function () {
      localStorage.setItem("foodDrinkAnswers", JSON.stringify(answers));
      window.location.href = "quizStylePage.html";
    });
  }

  if (button3) {
    button3.addEventListener("click", function () {
      const name = document.getElementById("name").value;
      const typeface = document.getElementById("typefaceOption").value;
      localStorage.setItem("userName", name);
      localStorage.setItem("typeface", typeface);
      window.location.href = "quizResultPage.html";
    });
  }

  if (window.location.href.includes("quizResultPage.html")) {
    const answers = JSON.parse(localStorage.getItem("foodDrinkAnswers"));
    const name = localStorage.getItem("userName");
    const typeface = localStorage.getItem("typeface");

    if (typeface) {
      document.body.style.fontFamily = typeface;
    }

    let foodRec = "";

    if (
      answers?.filling &&
      answers.soup &&
      answers.noodles &&
      answers.savory &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "beef cart noodles";
    } else if (
      answers?.light &&
      answers.soup &&
      answers.bread &&
      answers.savory &&
      !answers.meat &&
      answers.meal
    ) {
      foodRec = "plain congee with you tiao";
    } else if (
      answers?.filling &&
      !answers.soup &&
      answers.noodles &&
      answers.sweet &&
      !answers.meat &&
      answers.snack
    ) {
      foodRec = "mango pomelo sago";
    } else if (
      answers?.filling &&
      !answers.soup &&
      answers.bread &&
      answers.savory &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "cheung zai bao";
    } else if (
      answers?.light &&
      !answers.soup &&
      answers.noodles &&
      answers.sweet &&
      answers.meat &&
      answers.snack
    ) {
      foodRec = "cha siu cheung fun";
    } else if (
      answers?.filling &&
      answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      answers.meal
    ) {
      foodRec = "mango pancake";
    } else if (
      answers?.light &&
      !answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      answers.snack
    ) {
      foodRec = "dan tat";
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
      foodRec = "beef cart noodles";
    } else if (
      answers?.filling &&
      !answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      answers.snack
    ) {
      foodRec = "coconut cream bread";
    } else ( 
      answers?.filling &&
      !answers.soup &&
      answers.bread &&
      answers.sweet &&
      !answers.meat &&
      !answers.snack
    ) 
      foodRec = "pineapple bun with a slice of butter";
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
);

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

function sweetAnswer() {
  answers.sweet = true;
  answers.savory = false;
}
function savoryAnswer() {
  answers.savory = true;
  answers.sweet = false;
}
function breadAnswer() {
  answers.bread = true;
  answers.noodles = false;
}
function noodlesAnswer() {
  answers.noodles = true;
  answers.bread = false;
}
function soupAnswer() {
  answers.soup = true;
  answers.noSoup = false;
}
function noSoupAnswer() {
  answers.noSoup = true;
  answers.soup = false;
}
function meatAnswer() {
  answers.meat = true;
  answers.noMeat = false;
}
function noMeatAnswer() {
  answers.noMeat = true;
  answers.meat = false;
}
function mealAnswer() {
  answers.meal = true;
  answers.snack = false;
}
function snackAnswer() {
  answers.snack = true;
  answers.meal = false;
}
function lightAnswer() {
  answers.light = true;
  answers.filling = false;
}
function fillingAnswer() {
  answers.filling = true;
  answers.light = false;
}
function icedAnswer() {
  answers.iced = true;
  answers.hot = false;
}
function hotAnswer() {
  answers.hot = true;
  answers.iced = false;
}
function milkAnswer() {
  answers.milk = true;
  answers.noMilk = false;
}
function noMilkAnswer() {
  answers.noMilk = true;
  answers.milk = false;
}