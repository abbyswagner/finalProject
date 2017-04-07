//define variables; this includes the inputted values in the text box and the select, the buttons that queue the function, and the divs that will hold the displayed answer
var question1answer = document.getElementById("questiononeinput");
var question2answer = document.getElementById("question2select");
var question3answer = document.getElementById("question3select");
var question4answer = document.getElementById("question4select");
var question5answer = document.getElementById("question5select");
var question6answer = document.getElementById("question6select");
var question7answer = document.getElementById("question7select");
var question8answer = document.getElementById("question8select");
var question9answer = document.getElementById("question9select");
var question10answer = document.getElementById("question10select");
var question11answer = document.getElementById("question11select");
var question12answer = document.getElementById("question12select");
var question13answer = document.getElementById("question13select");
var nextQuestionButton = document.getElementById("nextQuestionButton");
var getresultsbutton = document.getElementById("ResultsButton");
var displayanswer1 = document.getElementById("answer1");
var displayanswer2 = document.getElementById("answer2");
var displayanswer3 = document.getElementById("answer3");
var displayanswer4 = document.getElementById("answer4");
var displayanswer5 = document.getElementById("answer5");
var displayanswer6 = document.getElementById("answer6");
var displayanswer7 = document.getElementById("answer7");
var displayanswer8 = document.getElementById("answer8");
var displayanswer9 = document.getElementById("answer9");
var displayanswer10 = document.getElementById("answer10");
var displayanswer11 = document.getElementById("answer11");
var displayanswer12 = document.getElementById("answer12");
var displayanswer13 = document.getElementById("answer13");
//var question13 = document.getElementById("question13");

//this is a function started by clicking the next question button
var num = 0;
document.getElementById("nextQuestionButton").addEventListener("click", function() {
   //Only done as first method and because it was stated only 13 questions will exist
   if (num == 12) {
      document.getElementById("question13").style.display = "block";
      document.getElementById("question10").style.display = "none";
      document.getElementById("question11").style.display = "none";
      document.getElementById("question12").style.display = "none";
   }
   // sets if statements that say to actually display certain divs (determined by their number) at a time
   else {
      num++;
      document.getElementById("question" + num).style.display = "block";
      if (num > 3) document.getElementById("question" + (num - 3)).style.display = "none";

      num++;
      document.getElementById("question" + num).style.display = "block";
      if (num > 3) document.getElementById("question" + (num - 3)).style.display = "none";


      num++;
      document.getElementById("question" + num).style.display = "block";
      if (num > 3) document.getElementById("question" + (num - 3)).style.display = "none";
      //this makes it so it scrolls to the top of the page when you press the next button
      window.scrollTo(0, 0);
   }
});

if(5>3){
   
}
else{
   
}





getresultsbutton.addEventListener("click", calculatefate);
//start function
function calculatefate() {
   // if statements say to put the output in a div to be shown at the end; the output is determined by the input in regards to the if statements
   if (question1answer.value == "a" || "e" || "i" || "o" || "u" || "y") {
      displayanswer1.innerHTML = "After you graduate high school, you will be accepted into Stanford University";
   }
   else {
      displayanswer1.innerHTML = "After you garduate high school, you will be accepted into New Mexico Highlands.";
   }

   if (question2answer.value == "apple") {
      displayanswer2.innerHTML = "You will receive a large scholarship for your abilities in sumo wrestling.";
   }
   else if (question2answer.value == "samsung") {
      displayanswer2.innerHTML = "You will recieve a large scholarship for your abilities in soccer.";
   }
   else {
      displayanswer2.innerHTML = " ";
   }
   if (question3answer.value == "pooh") {
      displayanswer3.innerHTML = "You will decide to major in trigonometry because you hate your life.";
   }
   else if (question3answer.value == "aladdin") {
      displayanswer3.innerHTML = "You will major in biological sciences.";
   }
   else if (question3answer.value == "pinocchio") {
      displayanswer3.innerHTML = "You will become a theatre major.";
   }
   else if (question3answer.value == "bambi") {
      displayanswer3.innerHTML = "Inspired be the election, you will major in Canadian studies.";
   }
   else {
      displayanswer3.innerHTML = " ";
   }
   if (question4answer.value == "carl") {
      displayanswer4.innerHTML = "After you graduate, you will move to a wholesome suburb of Wellington, New Zealand.";
   }
   else if (question4answer.value == "eugene") {
      displayanswer4.innerHTML = "After you graduate, you will move to Los Angeles, California because you have an unnatural obsession for frozen yogurt.";
   }
   else if (question4answer.value == "carol") {
      displayanswer4.innerHTML = "After you graduate, you will move to Austin, Texas.";
   }
   else if (question4answer.value == "gabriel") {
      displayanswer4.innerHTML = "After you graduate, you will move to Tiajuana, Mexico.";
   }
   else {
      displayanswer4.innerHTML = " ";
   }

   if (question5answer.value == "kardashian") {
      displayanswer5.innerHTML = "You will work at Safeway as a cashier.";
   }
   else if (question5answer.value == "trump") {
      displayanswer5.innerHTML = "You will become the next U.S president.";
   }
   else if (question5answer.value == "lujan") {
      displayanswer5.innerHTML = "You will live in your mother's basement.";
   }
   else if (question5answer.value == "ramos") {
      displayanswer5.innerHTML = "You will become a professional yoddler.";
   }
   else {
      displayanswer5.innerHTML = " ";
   }
   if (question6answer.value == "pooh") {
      displayanswer6.innerHTML = "You will be fired for being caught stealing TP.";
   }
   else if (question6answer.value == "piglet") {
      displayanswer6.innerHTML = "You will be fired for chewing too loudly.";
   }
   else if (question6answer.value == "roo") {
      displayanswer6.innerHTML = "You will be fired for hurting a customer.";
   }
   else if (question6answer.value == "christopherrobin") {
      displayanswer6.innerHTML = "You will be fired for getting high by a white board marker.";
   }
   else {
      displayanswer6.innerHTML = " ";
   }

   if (question7answer.value == "elmo") {
      displayanswer7.innerHTML = "So instead, you will be forced to work as a podiatrist in order to support yourself and your Kahoot gambling addiction.";
   }
   else if (question7answer.value == "bigbird") {
      displayanswer7.innerHTML = "So instead, you will be forced to work as a professional cuddler in order to support yourself and your raging Kahoot gambling addiction.";
   }
   else if (question7answer.value == "abby") {
      displayanswer7.innerHTML = "So instead, you will be forced to work as a dog food taster in order to support yourself and your raging Kahoot gambling addiction.";
   }
   else if (question7answer.value == "ernie") {
      displayanswer7.innerHTML = "So instead, you will be forced to work as a rental boyfriend in order to support yourself and your raging Kahoot gambling addiction.";
   }
   else {
      displayanswer7.innerHTML = " ";
   }

   if (question8answer.value == "apple") {
      displayanswer8.innerHTML = "You will own a BMW.";
   }
   else if (question8answer.value == "pumpkin") {
      displayanswer8.innerHTML = "You will own a Toyota.";
   }
   else if (question8answer.value == "pi") {
      displayanswer8.innerHTML = "You will own a lambourgini, spoiled rich brat.";
   }
   else if (question8answer.value == "pot") {
      displayanswer8.innerHTML = "You will own a Mercedes.";
   }
   else {
      displayanswer8.innerHTML = " ";
   }

   if (question9answer.value == "South") {
      displayanswer9.innerHTML = "You will live in a condo.";
   }
   else if (question9answer.value == "kanno") {
      displayanswer9.innerHTML = "You will live in an apartment.";
   }
   else if (question9answer.value == "sinner") {
      displayanswer9.innerHTML = "You will live in a tree house.";
   }
   else if (question9answer.value == "joe") {
      displayanswer9.innerHTML = "You will live in a mansion.";
   }
   else {
      displayanswer9.innerHTML = " ";
   }


   if (question10answer.value == "highwaytohell") {
      displayanswer10.innerHTML = "Eventually, you will marry and start a family with the famous actor Ryan Gosling, whom you met at one of your Kahoot Gamblers support groups.";
   }
   else if (question10answer.value == "fu") {
      displayanswer10.innerHTML = "Eventually, you will marry and start a family with the famous singer Zayn Malik, whom you met at one of your Kahoot Gamblers support groups.";
   }
   else if (question10answer.value == "dingdong") {
      displayanswer10.innerHTML = "Eventually, you will marry and start a family with the famous scientist Bill Nye, whom you met at one of your Kahoot Gamblers support groups.";
   }
   else if (question10answer.value == "kahoot1") {
      displayanswer10.innerHTML == "Eventually, you will marry and start a family with the famous actor John Malkovich, whom you met at one of your Kahoot Gamblers support groups.";
   }
   else {
      displayanswer10.innerHTML = " ";
   }

   if (question11answer.value == "happiness") {
      displayanswer11.innerHTML = "You will have 0 kids.";
   }
   else if (question11answer.value == "compassion") {
      displayanswer11.innerHTML = "You will have 20 kids.";
   }
   else if (question11answer.value == "jesus") {
      displayanswer11.innerHTML = "You will have 3 kids.";
   }
   else if (question11answer.value == "kahoot2") {
      displayanswer11.innerHTML = "You will have 5 kids.";
   }
   else {
      displayanswer11.innerHTML = " ";
   }
   if (question12answer.value == "pratt") {
      displayanswer12.innerHTML = "You will be bitten by a shark.";
   }
   else if (question12answer.value == "hemsworth") {
      displayanswer12.innerHTML = "Your house will get hit by a meteor.";
   }
   else if (question12answer.value == "evans") {
      displayanswer12.innerHTML = "You will win the lottery.";
   }
   else if (question12answer.value == "brown") {
      displayanswer12.innerHTML = "You will make a cameo on the Disney Channel reboot of Hannah Montanna.";
   }
   else {
      displayanswer12.innerHTML = " ";
   }
   if (question13answer.value == "yes") {
      displayanswer13.innerHTML = "You will then be eaten by a bear on your annual camping trip in the Canadian wilderness.";
   }
   else if (question13answer.value == "no") {
      displayanswer13.innerHTML = "You will then become immortal by eating a magical dorito.";
   }
   else {
      displayanswer13.innerHTML = " ";
   }

}

//
question13answer.addEventListener("click", function() {
   getresultsbutton.style.display = "block";
   nextQuestionButton.style.display = "none";
});



getresultsbutton.addEventListener("click", function() {
   getElementById("question13").style.display = "none";
})
