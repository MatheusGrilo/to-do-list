var enterButton = document.getElementById("enter");
var input = document.getElementById("itemInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  // Mark it as Done
  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);
  // end of Mark it as Done
}

function addListAfterClick() {
  if (input.value.length > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
