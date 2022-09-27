const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");

const deleteFun = function (){
    let listItem = this.parentNode;
    let curList = listItem.parentNode;
    curList.removeChild(listItem);
}

const addFun = function (){
    const newInput = input.value;
    const listItem = document.createElement("li");
    listItem.innerText = newInput;

    const deleteBtn = document.createElement("button");
    deleteBtn.id="delete";
    const deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    deleteBtn.addEventListener('click', deleteFun);
}

enter.addEventListener('click', addFun);