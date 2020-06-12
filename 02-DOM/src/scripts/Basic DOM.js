

let button = document.getElementById("button");
let button2 = document.getElementById("button2");
// let ul = document.querySelector("ul");
let button3 = document.getElementById("button3");
const myToDoList = document.querySelector('ul');
const myNewToDo = document.createElement('li');


button.addEventListener("click", function() {
    if (userinput.value.length > 0) {
    let li = document.createElement("li");
     li.appendChild(document.createTextNode(userinput.value));
     myToDoList.appendChild(li);
     userinput.value = "";
     console.log("this is working!");
    }
});

button2.addEventListener("click", function() {
    console.log("this too is working");
})

button3.addEventListener("click", function() {
    console.log("this too is also working");
    myToDoList.removeChild(myToDoList.lastElementChild);    

})
