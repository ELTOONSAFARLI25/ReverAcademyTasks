const submit=document.querySelector("#to-do-submit");
const todoInput=document.querySelector("#to-do-input");
const alert=document.querySelector("#alert");
const todoTasks=document.querySelector(".to-do-tasks");
const deleteAll=document.querySelector("#task-delete-all");
function deleteAllTasks(event){
    console.log(event.currentTarget.parentElement)
    // todoTasks.remove(event.currentTarget.parentElement);
}
deleteAll.addEventListener("click",deleteAllTasks);
function removeTask(event){
    // alert("are you sure?");
    todoTasks.removeChild(event.currentTarget.parentElement.parentElement);
}

function edit(input){
    console.log(input.target)

}
function renderTasks(value){
    const buttons=document.createElement("div");
    buttons.classList.add("buttons");

    const content=document.createElement("div");
    content.classList.add("content");

    const task=document.createElement("div")
    task.classList.add("task");

    const input=document.createElement("p");
    input.innerText=todoInput.value;

    const deleteTask=document.createElement("button");
    deleteTask.classList.add("task-delete");
    deleteTask.innerText="Delete";
    deleteTask.addEventListener("click",removeTask)

    const editTask=document.createElement("button");
    editTask.classList.add("task-edit");
    editTask.innerText="Edit";
    editTask.addEventListener("click",edit);





    content.appendChild(input);
    buttons.append(deleteTask,editTask)
    task.append(content,buttons);
    todoTasks.appendChild(task);

    
}

function addTask(input){
    let inputValue=todoInput.value;
    if(inputValue==""){
        alert.style.display="block";

    }
    else{
        alert.style.display="none";
        renderTasks(todoInput.value);
    }

    console.log(inputValue);

    input.preventDefault();
    todoInput.value="";
}


submit.addEventListener("click",addTask);