const input_text = document.getElementById("input");
const list_container = document.getElementById("list_container");

function addTask(){
    if(input_text.value === ""){
        alert("you must write soething")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_text.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input_text.value = '';
    save();
}
list_container.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false)
function save(){
    localStorage.setItem("Data" , list_container.innerHTML);
}
function load(){
    list_container.innerHTML = localStorage.getItem("Data");
}
load()