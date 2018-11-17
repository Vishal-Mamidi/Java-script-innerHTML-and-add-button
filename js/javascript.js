console.log("in js");
var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
console.log("in js");

ourList.addEventListener("click", activateItem);

function activateItem(e){
    console.log("in h1 inner HTML")
    ourHeadline.innerHTML = e.target.innerHTML;
  }


ourButton.addEventListener("click", createNewItem);

function createNewItem(){
  ourList.innerHTML += "<li>Something new "+ newItemCounter + "</li>";
  newItemCounter++;
}