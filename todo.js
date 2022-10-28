'use strict';

let itemList = [];
let inputButton = document.querySelector(".inputButton");

inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".todoInput").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector(".todoInput").value = "";
        document.querySelector(".todoInput").focus();
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++)
        list += `<li>${itemList[i]}<span class='close' id=${i}>\u00D7`
    list += "</ul>";
    document.querySelector(".todo_items").innerHTML = list;

    let deleteButtons = document.querySelector(".close");
    for (let i = 0; i < deleteButtons.length; i++)
        deleteButtons[i].addEventListener("click", deleteItem);
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}