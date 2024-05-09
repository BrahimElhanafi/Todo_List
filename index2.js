var input = document.getElementById('input');

function add_todo(){
    var inputvalue=input.value.trim();
    var listitem = document.createElement("li");
    listitem.textContent=inputvalue;
    console.log(inputvalue);
    document.getElementById("todoList").appendChild(listitem);
    listitem.onclick = function linetorugh(){
    listitem.classList.add('todo-item');
    }
}