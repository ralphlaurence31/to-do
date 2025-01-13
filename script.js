document.addEventListener('DOMContentLoaded', function() {

const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

function addTask(){
    if(inputText.value == ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputText.value=""
    saveList();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
}, false);

function saveList() {
    if (typeof window !== "undefined") {
        localStorage.setItem("datas", listContainer.innerHTML);
    }
}

function showToDoList() {
    if (typeof window !== "undefined") {
        listContainer.innerHTML = localStorage.getItem("datas") || '';  // Fallback if no data
    }
}

// Call showToDoList when the page loads
if (typeof window !== "undefined") {
    showToDoList();
}

addButton.addEventListener('click', addTask);

});
