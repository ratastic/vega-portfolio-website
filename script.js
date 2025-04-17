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
      foodRec = "bo lo yau"; // works
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
      drinkRec = "ovaltine";
    }

    const resultText = document.getElementById("resultText");
    if (resultText) {
      if (foodRec === "dim sum") {
        resultText.textContent = `hi ${name}, you provided an interesting answer combination; you should try dim sum and ${drinkRec}.`;
      } else {
        resultText.textContent = `hi ${name}, based on your answers, the food and drink I'd recommend to you are ${foodRec} and ${drinkRec}.`;
      }
    }

    const foodImage = document.getElementById("foodImage");
    const drinkImage = document.getElementById("drinkImage");
    
    if (foodImage && drinkImage){
      const foodMap = {
        "beef cart noodles": "foodQuizImages/beefCart.png",
        "plain congee with you tiao": "foodQuizImages/congeeYouTiao.png",
        "hong kong-styled french toast": "foodQuizImages/frenchToast.png",
        "pork congee with century egg": "foodQuizImages/centuryEgg.png",
        "mango pomelo sago": "foodQuizImages/mangoPomelo.png",
        "cha siu fan": "foodQuizImages/chaSiuBao.png",
        "cheung fun with fishballs and siu mai": "foodQuizImages/curryFishball.png",
        "cheung fun": "foodQuizImages/cheungFun.png",
        "mango pancake": "foodQuizImages/mangoPancake.png",
        "dan tat": "foodQuizImages/danTat.png",
        "cha siu bao": "foodQuizImages/chaSiuBao.png",
        "cheung zai bao": "foodQuizImages/cheungZai.png",
        "macaroni soup with spam": "foodQuizImages/macaroniSoup.png",
        "bo lo yau": "foodQuizImages/pineappleBun.png",
        "dim sum": "foodQuizImages/dimSum.png"
      };
    
      const drinkMap = {
        "red bean ice": "foodQuizImages/redBeanIce.png",
        //"hot lemon tea": foodQuizImages
        "ice lemon tea": "foodQuizImages/honeyLemon.png",
        "hong kong milk tea": "foodQuizImages/milkTea.png",
        "ovaltine": "foodQuizImages/ovaltine.png"
      }
    
      foodImage.src = foodMap[foodRec] || foodMap["dim sum"];
      drinkImage.src = drinkMap[drinkRec] || drinkMap["ovaltine"];
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
