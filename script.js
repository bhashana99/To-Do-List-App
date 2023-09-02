const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const emptyTaskMessage = document.getElementById("empty-task-message");

// Load saved data from localStorage when the page loads
loadData();

function addTask(){
    if(inputBox.value === ''){
       // alert("You must write something!");
       emptyTaskMessage.style.display = "block";
    }
    else{
        emptyTaskMessage.style.display = "none";

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    inputBox.value='';
    
}

//when click the task or close-icon
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


// Add an event listener for the Enter key press on the input field
inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

// save task data to localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load task data from localStorage
function loadData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      listContainer.innerHTML = savedData;
    }
  }

