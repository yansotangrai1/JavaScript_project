//DOM Manipulation
let classFirst = document.querySelectorAll(".classFirst");
console.dir(classFirst);
let idx = 1;
for(div of classFirst){

    div.innerText =`unique value ${idx}`;
    idx++;
}
