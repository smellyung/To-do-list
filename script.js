var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeThrough(event) {
	if (event.target.nodeName == "LI") {
		event.target.classList.toggle("done");
	}
};

function deleteItem(event) {
	event.target.parentNode.remove();
};

function addDeleteButton(li) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	li.appendChild(deleteButton);
	deleteButton.onclick = deleteItem
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", strikeThrough);
listItems.forEach((li) => {
	addDeleteButton(li);
});