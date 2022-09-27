const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const completed = document.querySelector("#completed")

const deleteFun = function (){
    let listItem = this.parentNode;
    let curList = listItem.parentNode;
    curList.removeChild(listItem);
}
const checkBoxFun= function(event){

        if (event.currentTarget.checked) {
          let listItem = event.currentTarget.parentNode
          listItem.style.color = "grey"
          const compItem = document.createElement("li");
          const text = listItem.querySelector("#text");
          compItem.innerText = text.innerText;
          completed.appendChild(compItem);
        } else {
          let listItem = event.currentTarget.parentNode
          listItem.style.color = "black"
        }
  
}


const addFun = function (){
    const newInput = input.value;
    const listItem = document.createElement("li");
   // listItem.innerText = newInput;
    const text = document.createElement("p")
    text.id = "text";
    text.innerText = newInput;
    listItem.appendChild(text);

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
