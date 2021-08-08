
const existingitems = localStorage.getItem("todolist");
let todo = [];

if(existingitems){
    const parsedItems = JSON.parse(existingitems);
    todo = [...parsedItems];}
    todo.forEach(Element=>showItems(Element));


function showinput(){
    document.getElementById("todoinput").classList.remove("hidden");
}

 function showItems(value){
    const todoreference = document.getElementById("todoitems");
    const todoitem = document.createElement("li");
    const delButton = document.createElement("button");

    delButton.addEventListener("click",()=>{
        todoreference.removeChild(todoitem);
        const Index = todo.indexOf(value);
        todo.splice(Index,1);
        localStorage.setItem("todolist",JSON.stringify(todo));
    });
    const check = document.createElement("input");
    const textNode = document.createElement("span");
    textNode.setAttribute("id","itemlist");
    textNode.innerHTML=`${value}`;
    check.setAttribute("type", "checkbox");
    check.addEventListener("change", function(){
        if(this.checked){
            textNode.classList.add("line-through");
        } else{
            textNode.classList.remove("line-through");
        }
    });
    delButton.classList.add("outline-none")
    const deletetodo = document.createElement("i");
    deletetodo.classList.add("fa-times-circle");
    deletetodo.classList.add("far");
    delButton.appendChild(deletetodo);

    const todoitemutil = document.createElement("div");
    todoitemutil.setAttribute("id","innerbuttons");
    todoitem.appendChild(textNode);
    todoitemutil.appendChild(check);
    todoitemutil.appendChild(delButton);
    todoitem.appendChild(todoitemutil);
    todoreference.appendChild(todoitem);
 }
 var inputbox = document.getElementById("inputbox");
 inputbox.addEventListener('keypress', addList);
 function addList(evt){
     if(evt.keyCode==13){
         todo.push(inputbox.value);
         document.getElementById("todoinput").classList.add("hidden");
         showItems(inputbox.value);
         inputbox.value ="";
         localStorage.setItem("todolist",JSON.stringify(todo));
     }
 }