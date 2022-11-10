'use strict';

let itemList = [];
let inputBox = document.querySelector("input[type='text']")
let inputButton = document.querySelector(".input-button");
let checkList = document.querySelector(".todo-list");
const TODOLIST = "toDoList"

load();

inputBox.addEventListener('keydown', event => {
    if (event.keyCode === 13)
        event.preventDefault();
});

checkList.addEventListener('click', event => {
    const tar = event.target;
    for (const i in itemList) {
        if (itemList[i].id === parseInt(tar.id)) {
            itemList[i].isDone = !itemList[i].isDone;
            tar.classList.toggle("checked");
        }
    }
    localStorage.setItem(TODOLIST, JSON.stringify(itemList));
});

function save(item, bool) {
    const itemObj = {
        text: item,
        id: itemList.length,
        isDone: bool,
    };
    itemList.push(itemObj);
    localStorage.setItem(TODOLIST, JSON.stringify(itemList));
}

function load() {
    const loadedJSON = localStorage.getItem(TODOLIST);
    if (loadedJSON != null) {
        const parsedJSON = JSON.parse(loadedJSON);
        for (let item of parsedJSON) {
            const { text } = item;
            save(text, item.isDone);
        }
        showList();
    }
}

inputButton.addEventListener('click', addItem);
function addItem() {
    let item = document.querySelector(".todo-input-field input");
    if (item.value != "") {
        save(item.value, false);
        item.value = "";
        item.focus();
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++)
        list += `<li id=${i} class=${itemList[i].isDone === true ? "checked" : ""}>${itemList[i].text}<span class='close' id=${i}><i class="fa-solid fa-xmark"></i>`
    list += "</ul>";
    document.querySelector(".todo-list").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++)
        deleteButtons[i].addEventListener("click", deleteItem);
    magicGrid.positionItems();
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    localStorage.setItem(TODOLIST, JSON.stringify(itemList));
    showList();
}