'use strict';
/*
//Method available in the document object to select css element and his text content with .textContent property
console.log(document.querySelector(".message").textContent);
//Select the element, the content (text) amd set the text of the element
document.querySelector(".message").textContent = "Correct Number!";
//Select and set number and score classes
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
//Select an input element and get the value. If we want to set that value add an assignment operator to the end, and a number (= 1)
document.querySelector(".guess").value;*/

//Event listener applied to check button element, with addEventListener method. We have to pass an argument with the type of event we are waiting and next, as a second argument, we need to write a function called "the event handler function" to specify the reaction when the event is listen:
document.querySelector(".check").addEventListener("click",
    function () {
        //Get the value from the input, transform the string into a value and store in "guess" variable
        const guess = Number(document.querySelector(".guess").value);

        //If the user does not input a value, display a message. The following only works if it is true. So, "guess" is 0 so its falsy value, but with the not operator, transforms to true.
        if (!guess) {
            document.querySelector(".message").textContent = "Enter a number!"
        }
    });
