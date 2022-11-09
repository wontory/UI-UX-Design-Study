const html = document.querySelector('html');
const toggle = document.querySelector('.toggle-switch');
let darkMode2 = localStorage.getItem('darkMode2');

load();

toggle.addEventListener('click', event => {
    html.classList.toggle('dark');
    if (darkMode2 !== 'enabled')
        localStorage.setItem('darkMode2', 'enabled');
    else
        localStorage.setItem('darkMode2', null);
    darkMode2 = localStorage.getItem('darkMode2');
})

function load() {
    if (darkMode2 === 'enabled') {
        html.classList.add('dark');
        toggle.checked = true;
    }
}