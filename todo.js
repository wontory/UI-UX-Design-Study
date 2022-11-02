'use strict';

let itemList = [];
let inputBox = document.querySelector("input[type='text']")
let inputButton = document.querySelector(".input-button");

inputBox.addEventListener('keydown', event => {
    if (event.keyCode === 13)
        event.preventDefault();
});
inputButton.addEventListener('click', addItem);

function addItem() {
    let item = document.querySelector(".todo-item input");
    if (item.value != "") {
        itemList.push(item.value);
        item.value = "TO-DO";
        item.focus();
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++)
        list += `<li>${itemList[i]}<span class='close' id=${i}><i class="fa-solid fa-xmark"></i>`
    list += "</ul>";
    document.querySelector(".todo-list").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
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