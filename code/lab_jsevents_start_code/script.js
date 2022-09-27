const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");

enter.addEventListener('click', () => {
    const newInput = input.value;
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);
    listItem.innerText = newInput;
    list.appendChild(listItem);
    list.appendChild(deleteBtn);
})