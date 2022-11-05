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
    if (event.target.tagName === 'LI')
        event.target.classList.add('checked');
});

function save(item) {
    const itemObj = {
        text: item,
        id: itemList.length + 1,
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
            loadItem(text);
        }
        showList();
    }
}

function loadItem(text) {
    save(text);
}

inputButton.addEventListener('click', addItem);
function addItem() {
    let item = document.querySelector(".todo-input-field input");
    if (item.value != "") {
        save(item.value);
        item.value = "";
        item.focus();
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++)
        list += `<li>${itemList[i].text}<span class='close' id=${i}><i class="fa-solid fa-xmark"></i>`
    list += "</ul>";
    document.querySelector(".todo-list").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++)
        deleteButtons[i].addEventListener("click", deleteItem);
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    localStorage.setItem(TODOLIST, JSON.stringify(itemList));
    showList();
}