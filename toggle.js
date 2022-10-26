const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }

    const clockContainer = document.querySelector('.clock-container');
    if (clockContainer.classList.contains('dark')) {
        clockContainer.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        clockContainer.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }

    const toggleSlider = document.querySelector('.toggle-slider');
    if (toggleSlider.classList.contains('dark')) {
        toggleSlider.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        toggleSlider.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})