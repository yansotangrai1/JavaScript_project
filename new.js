let button = document.querySelector("button");
let body = document.querySelector("body");
let currMode ="light";
button.addEventListener("click",()=>{
    if(currMode == "light"){
    body.classList.add("darkest");
    body.classList.remove("lightest");
    body.classList.add()
    currMode ="black";
    console.log(currMode);
    }else{
        body.classList.add("lightest");
        body.classList.remove("darkest");
        currMode="light";
        console.log(currMode);
    }
})

