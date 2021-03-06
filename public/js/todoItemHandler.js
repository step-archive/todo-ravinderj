const showItem = function(){
  let itemsDiv = document.getElementsByClassName("items")[0];
  let todoItem = JSON.parse(this.responseText);
  console.log(todoItem);
  
  let itemText = todoItem.text;
  let itemId = todoItem.id;
  appendTodoItem(todoItem,itemsDiv);
}

const createItem = function(){
  let todoId = document.querySelector("h1").id;
  let text = document.querySelector("#itemText").value;
  let req = new XMLHttpRequest();
  req.addEventListener("load",showItem);
  req.open("POST","/addItem");
  req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  req.send(`todoId=${todoId}&text=${text}`);
};
