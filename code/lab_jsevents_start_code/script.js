const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const deleteBtn = document.querySelector("#delete");

enter.addEventListener('click', () => {
    const newInput = input.value;
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.id="delete";
    const deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);
    listItem.innerText = newInput;
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    
    deleteBtn.addEventListener('click',()=>{
    
        list.removeChild(listItem);
    
    })

})
