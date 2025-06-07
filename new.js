//DOM Manipulation
let classFirst = document.querySelectorAll(".classFirst");
console.dir(classFirst);
let idx = 1;
for(div of classFirst){

    div.innerText =`unique value ${idx}`;
    idx++;
}
//Add new button through javaScript as the first element of body
let newButton = document.createElement("button");
newButton.textContent = "Click me!";
console.log(newButton);
newButton.style.backgroundColor ="red";
newButton.style.color = "white";
let body = document.querySelector("body");
body.before(newButton);
