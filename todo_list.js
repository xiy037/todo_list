loadStoredList();

function loadStoredList() {
 var stored = JSON.parse(localStorage.getItem("todoList"));
 document.getElementById("list").innerHTML = stored;
}
function storeToDoList() {
  var list = document.getElementById("list").innerHTML;
  localStorage.setItem("todoList", JSON.stringify(list));
}
function clearAllandStorage() {
  document.getElementById("list").innerHTML = "";
  localStorage.removeItem("todoList");
}
function addList() {
  var inputText = document.getElementById("userInput").value;
  if (inputText === "") {
    alert("invalid input!! Please enter something!");
  } else {
    var listContent = document.createTextNode(inputText);
    var list = document.getElementById("list");
    var newList = document.createElement("li");
    newList.className = "active";
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkBoxClass");
    checkBox.setAttribute("onclick", "markCheckBox()")
    newList.appendChild(listContent);
    newList.insertBefore(checkBox, listContent);
    list.appendChild(newList);
    clearDisplay();
  }
  storeToDoList();
}

function clearDisplay() {
  document.getElementById("userInput").value = "";
}

function markCheckBox() {
  var boxList = document.getElementsByClassName("checkBoxClass");
  var checkBox = document.getElementsByClassName("checkBoxClass");
  var listItem = document.getElementsByTagName("li");
  for (i = 0; i < boxList.length; i++) {
    if (boxList[i].checked) {
      listItem[i].className = "complete";
      checkBox[i].setAttribute("checked", "checked");
    } else {
      listItem[i].className = "active";
    }
  }
}

function listAll() {
  var listItem = document.getElementsByTagName("li");
  for (i = 0; i < listItem.length; i++) {
    document.getElementsByTagName("li")[i].style.display = "list-item";
  }
}

function listActive() {
  listAll();
  var complete= document.getElementsByClassName("complete");
  for (i = 0; i < complete.length; i++){
    document.getElementsByClassName("complete")[i].style.display = "none";
  }
}

function listComplete() {
  listAll();
  var active = document.getElementsByClassName("active");
  for (i = 0; i < active.length; i++) {
    document.getElementsByClassName("active")[i].style.display = "none";
  }
}