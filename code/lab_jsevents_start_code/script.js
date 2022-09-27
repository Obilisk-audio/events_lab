const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");

const deleteFun = function (){
    let listItem = this.parentNode;
    let curList = listItem.parentNode;
    curList.removeChild(listItem);
}
const checkBoxFun= function(event){

        if (event.currentTarget.checked) {
          alert('checked');
        } else {
          alert('not checked');
        }
      }


const addFun = function (){
    const newInput = input.value;
    const listItem = document.createElement("li");
    listItem.innerText = newInput;

    const deleteBtn = document.createElement("button");
    deleteBtn.id="delete";
    const deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");

    listItem.appendChild(deleteBtn);
    listItem.appendChild(checkBox);
    list.appendChild(listItem);
    checkBox.addEventListener('change', checkBoxFun);
       

    deleteBtn.addEventListener('click', deleteFun);
}

enter.addEventListener('click', addFun);
