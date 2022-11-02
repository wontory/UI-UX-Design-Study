'use strict';

let itemList = [];
let inputButton = document.querySelector(".input-button");

inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".todo-item input").value;
    if (item != "") {
        itemList.push(item);
        document.querySelector(".todo-item").value = "TO-DO";
        document.querySelector(".todo-item").focus();
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++)
        list += `<li>${itemList[i]}<span class='close' id=${i}>\u00D7`
    list += "</ul>";
    document.querySelector(".todo-list").innerHTML = list;

    let deleteButtons = document.querySelector(".close");
    for (let i = 0; i < deleteButtons.length; i++)
        deleteButtons[i].addEventListener("click", deleteItem);
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

let checkList = document.querySelector(".todo-list");
checkList.addEventListener('click', event => {
    if (event.target.tagName === 'LI')
        event.target.classList.toggle('checked');
});