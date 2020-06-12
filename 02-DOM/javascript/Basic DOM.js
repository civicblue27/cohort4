


let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
    console.log("this is working");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Item"));
    ul.appendChild(li);
})

button2.addEventListener("click", function () {
    console.log("this too is working");
})