let list = new LinkedList();

function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") 
        return alert("Enter a task");
    list.insert(task);
    displayList();
}

function deleteTask() {
    let task = document.getElementById("taskInput").value;
    list.delete(task);
    displayList();
}

function searchTask() {
    let task = document.getElementById("taskInput").value;
    alert(list.search(task) ? "Task Found" : "Task Not Found");
}

function displayList() {
    document.getElementById("listDisplay").innerHTML = list.toHTML();
}
