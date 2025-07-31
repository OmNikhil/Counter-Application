"use strict";

let count =0;

function increment() {
    count++;
    displayCount();

}
function decrement
() {
    count--;
    displayCount()

    
}
function reset() {
    count=0;
    displayCount();

    
}


function displayCount() {
   document.getElementById("output").innerHTML = `${count}`;
}
