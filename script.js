'use strict';


//Variable with random number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
//This variable can also be called "state variable" because is part of the application state (all the data relevant for the application)
let score = 10;


//Event listener applied to check button element. We have to pass an argument with the type of event we are waiting and next, as a second argument, we need to write a function called "the event handler function" to specify the reaction when the event is listen:
document.querySelector(".check").addEventListener("click",
    function () {
        //Get the value from the input, transform the string into a value and store in "guess" variable
        let guess = Number(document.querySelector(".guess").value);

        //If the user does not input a value, display a message. The following only works if it is true. So, "guess" is 0 so its falsy value, but with the not operator, transforms to true.
        if (!guess) {
            document.querySelector(".message").textContent = "Enter a number!";
        } else if (guess === secretNumber) {
            document.querySelector(".message").textContent = "Correct number!";
        } else if (guess > 20 || guess < 1) {
            document.querySelector(".message").textContent = "Enter a number from 1 to 20";
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "Too high";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "GAME OVER!";
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "Too low";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "GAME OVER!";
            }
        }
    }
);
