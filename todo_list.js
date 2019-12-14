loadStoredList();
document.addEventListener("click", storeToDoList);
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
}

function clearDisplay() {
  document.getElementById("userInput").value = "";
}

function markCheckBox() {
  var boxList = document.getElementsByClassName("checkBoxClass");
  var checkBox = document.getElementsByClassName("checkBoxClass");
  var listItem = document.getElementsByTagName("li");
  for (var i = 0; i < boxList.length; i++) {
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
  for (var i = 0; i < listItem.length; i++) {
    listItem[i].style.display = "list-item";
  }
  styleEvenLine(listItem);
}

function listActive() {
  listAll();
  var complete = document.getElementsByClassName("complete");
  var active = document.getElementsByClassName("active");
  for (let i = 0; i < complete.length; i++) {
    complete[i].style.display = "none";
  }
  styleEvenLine(active);
}

function listComplete() {
  listAll();
  var active = document.getElementsByClassName("active");
  var complete = document.getElementsByClassName("complete");
  for (var i = 0; i < active.length; i++) {
    active[i].style.display = "none";
  }
  styleEvenLine(complete);
}

function styleEvenLine(nodelist) {
  for (var i = 0; i < nodelist.length; i++) {
    if (i % 2 === 1) {
      nodelist[i].style.backgroundColor = "#ffe6e6";
    } else {
      nodelist[i].style.backgroundColor = "white";
    }
  }
}