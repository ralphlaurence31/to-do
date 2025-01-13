const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

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
    }
}, false);

function saveList(){
    localStorage.setItem("datas",listContainer.innerHTML);
}

function showToDoList(){
    listContainer.innerHTML = localStorage.getItem("datas");
}
showToDoList();

