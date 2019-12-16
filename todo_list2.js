/* listArr = [
  {
    id: 0, 
    text: 用户写入部分,
    status: acitve,
  },
  {
    id: 1,
    text: 用户写入部分,
    status: acitve,
  }
];
addList()时将输入部分写入listArr并储存，并且创建新的li显示输入内容
listAll()时将所有listArr都建li，重新写入ol下面显示出来
listActive()将status为active的部分写入li，重写ol，显示出来
istComplete()讲status为complete的部分写入li，重写ol，显示
markcheckbox()，根据checkbox是否选中而改变status状态为active或者complete。
*/
var listArr = [];
var list = document.getElementById("list");
function addList() {
  var listObjItem = {};
  var inputVal = document.getElementById("userInput").value;
  if (inputVal === "") {
    alert("invalid input, please enter something!");
  } else {
    listObjItem.text = inputVal;
    listObjItem.status = "active";
    var newList = document.createElement("li");
    newList.innerHTML = `<input type="checkbox" id=${listArr.length}>${listObjItem.text}`;
    list.appendChild(newList);
    document.getElementById("userInput").value = "";
    listArr.push(listObjItem);
    addIdToItems();
    storeList();
    console.log(listArr);
  }
}
function addIdToItems() {
  for (var i = 0; i < listArr.length; i++) {
    listArr[i].id = i;
  }
}

function listAll() {
  clearContent();
  showList(listArr);
  console.log(list.innerHTML);
}
function listActive() {
  clearContent();
  var activeListArr = [];
  for (var i = 0; i < listArr.length; i++) {
    if (listArr[i].status === "active") {
      activeListArr.push(listArr[i]);
    }
  }
  showList(activeListArr);
}
function clearContent() {
  list.innerHTML = "";
}
function showList(objArr) {
  for (var i = 0; i < objArr.length; i++) {
    var newList = document.createElement("li");
    newList.className = objArr[i].status;
    newList.innerHTML = `<input type="checkbox" id=${objArr[i].id} ${objArr[i].status === "complete" ? "checked" : ""}>${objArr[i].text}`;
    list.appendChild(newList);
  }
}
function markCheckbox() {
  if (event.target.type === "checkbox") {
    for (var i = 0; i < listArr.length; i++) {
      if (listArr[i].id == event.target.id){
        if (event.target.checked === true) {
          listArr[i].status = "complete";
          event.target.parentNode.className = listArr[i].status;
        } else {
          listArr[i].status = "active";
        }
      }
    }
  }   
}



function storeList() {
  var jsonArr = JSON.stringify(listArr);
  localStorage.setItem("todoList", jsonArr);
}
function loadStoredList() {
  console.log(JSON.parse(localStorage.getItem("todoList")));
}
function clearAllandStorage() {
  localStorage.removeItem("todoList");
}