//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listener...
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    //prevent from form submitting
    event.preventDefault();

    //todo  div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class = "fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);



    //CHECK TRASH BUTTON
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    //APPEND TODO-LIST
    todoList.appendChild(todoDiv);

    //Clear Todo Input Value...
    todoInput.value = '';
}

//deleteCheck function
function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function () {
            todo.remove();

        });
    }
    //CHECK MARK TODO
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

//FILTER TODO
function filterTodo(e) {
    const todos = todoList.childNodes;
     //console.log(todos);
     todos.forEach(function(todo){
         switch(e.target.value){
             case "all":
                todo.style.display = 'flex';
                 break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    }else{
                        todo.style.display = "none";
                    }
                    break;
         }

     });
  
}





