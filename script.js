let answers = { // set the answers to unclicked/false initially 
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

function toggleButtonStyles(selectedId, otherId) { // only one button can be lime green at a time
  const selected = document.getElementById(selectedId);
  const other = document.getElementById(otherId);

  if (selected) selected.style.backgroundColor = "#9bdd4a"; 
  if (other) other.style.backgroundColor = "#ff007f"; 
}

document.addEventListener("DOMContentLoaded", function () { // page switches; input from each page is stored
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

    let foodRec = ""; // defines the answer combinations for each food and drink

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
      answers?.filling &&
      answers.soup &&
      answers.bread &&
      !answers.sweet &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "pork congee with century egg"; //works
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
      !answers.savory &&
      answers.meat &&
      answers.meal
    ) {
      foodRec = "cha siu fan"; //???
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

    const resultText = document.getElementById("resultText"); // inserts food and drink specific text 
    if (resultText) {
      if (foodRec === "dim sum") {
        resultText.textContent = `hi ${name}, you provided an interesting answer combination; you should try dim sum and ${drinkRec}.`;
        descText.textContent = `dim sum is a meal composed of an assortment of small dishes— usually steamed in bamboo baskets— and is best eaten with a group. dim sum menus offer a wide variety of ingredient and flavor options such as steamed buns, braised chicken feet, various dumplings, etc.`;
      } else {
        resultText.textContent = `hi ${name}, based on your answers, the food and drink I'd recommend to you are ${foodRec} and ${drinkRec}.`;
      }
      if (foodRec === "beef cart noodles"){
        descText.textContent = `beef cart noodles are sold by street vendors and small restaurants in hong kong. though this recommendation suggests beef, these bowls are customizable and offer a variety of meat options, toppings such as radish and tripe, and noodle types.`;
      }
      if (foodRec === "plain congee with you tiao"){
        descText.textContent = `plain congee with you tiao is a popular chinese breakfast consisting of a rice porridge and fried dough.`;
      }
      if (foodRec === "hong kong-styled french toast"){
        descText.textContent = `hong kong-styled french toast is a unique take on the typical french toast— it has a layer of peanut butter between the bread and is topped with condensed milk or syrup and a slice butter.`;
      }
      if (foodRec === "pork congee with century egg"){
        descText.textContent = `pork congee is a rice porridge with shredded pork; century egg is a preserved egg. don't be alarmed by the color!`;
      }
      if (foodRec === "mango pomelo sago"){
        descText.textContent = `mango pomelo sago is a sweet and refreshing hong kong dessert consisting of a pureed mango base, diced mango, coconut milk, tapioca pearls, and pomelo.`;
      }
      if (foodRec === "cha siu fan"){
        descText.textContent = `cha siu fan is a rice-based dish topped with a cantonese barbeque pork and vegetables.`;
      }
      if (foodRec === "cheung fun with fishballs and siu mai"){
        descText.textContent = `cheung fun with fishballs and siu mai is a popular hong kong street food often topped with a peanut sauce and hoisin sauce or a sweet soy sauce and garnished with sesame seeds. cheung fun are steamed rice rolls; siu mai is a dumpling served plain or filled with pork or shrimp.`;
      }
      if (foodRec === "cheung fun"){
        descText.textContent = `cheung fun are steamed rice rolls often served with a peanut sauce and hoison sauce or sweet soy sauce and garnished with sesame seeds.`;
      }
      if (foodRec === "mango pancake"){
        descText.textContent = `mango pancake is a hong kong dessert made of a thin yellow crepe filled with whipped cream and sweet mango chunks.`; 
      }
      if (foodRec === "dan tat"){
        descText.textContent = `dan tat is a shortcrust pastry with an egg custard filling. it is similar to portugese egg tarts but is less sweet.`;
      }
      if (foodRec === "cha siu bao"){
        descText.textContent = `cha siu bao is a cantonese dim sum staple. it is a steamed bun with a sweet barbeque pork filling.`;
      }
      if (foodRec === "cheung zai bao"){
        descText.textContent = `cheung zai bao is a breakfast bun with a pork sausage in the center.`;
      }
      if (foodRec === "macaroni soup with spam"){
        descText.textContent = `macaroni soup with spam is a breakfast dish commonly served at cha chaan tengs— hong kong diners. it is a salty macaroni noodle soup dish paired with luncheon meat, fried egg, and vegetables`;
      }
      if (foodRec === "bo lo yau"){
        descText.textContent = `bo lo yau is an elevated version of bo lo bao— "pineapple bun" in english. it is a bun with a cracked, cookie-like coating that resembles the texture of a pineapple. bo lo yau— yau meaning "oil" in english— is a pineapple bun served with a slice of butter stuffed in the center.`;
      }

      if (drinkRec === "red bean ice"){
        drinkDesc.textContent = `red bean ice is a shaved ice drink with sweet adzuki beans and evaporated milk. it is popular in cha chaan tengs— hong kong diners.`;
      }
      if (drinkRec === "hot lemon tea"){
        drinkDesc.textContent = `hot lemon tea is pretty self-explanatory; however, it is crucial that you crush your lemon to release the flavor.`;
      }
      if (drinkRec === "iced lemon tea"){
        drinkDesc.textContent = `iced lemon tea is pretty self-explanatory; however, it is crucial that you crush your lemon to release the flavor.`;
      }
      if (drinkRec === "hong kong milk tea"){
        drinkDesc.textContent = `hong kong milk tea— inspired by british milk tea— is made with ceylon black tea and evaporated milk instead.`;
      }
      if (drinkRec === "ovaltine"){
        drinkDesc.textContent = `ovaltine is a chocolate-malt flavored powder mixed with milk either served hot or iced.`;
      }
    }

    const foodImage = document.getElementById("foodImage");
    const drinkImage = document.getElementById("drinkImage");
    
    if (foodImage && drinkImage){ // display specific food and drink 
      const foodMap = {
        "beef cart noodles": "foodQuizImages/beefCart.png",
        "plain congee with you tiao": "foodQuizImages/congeeYouTiao.png",
        "hong kong-styled french toast": "foodQuizImages/frenchToast.png",
        "pork congee with century egg": "foodQuizImages/centuryEgg.png",
        "mango pomelo sago": "foodQuizImages/mangoPomelo.png",
        "cha siu fan": "foodQuizImages/chaSiuFan.png",
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
        "hot lemon tea": "foodQuizImages/hotLemon.png",
        "iced lemon tea": "foodQuizImages/honeyLemon.png",
        "hong kong milk tea": "foodQuizImages/milkTea.png",
        "ovaltine": "foodQuizImages/ovaltine.png"
      }
    
      // inserts the necessary food and drink image 
      foodImage.src = foodMap[foodRec] || foodMap["dim sum"]; 
      drinkImage.src = drinkMap[drinkRec] || drinkMap["ovaltine"];
    }

  }
});

// functions tied to buttons defined in html page
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
