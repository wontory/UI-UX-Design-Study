const navbar = document.querySelector('.nav-background');

window.addEventListener('scroll',(ev)=>{
	if (0 < window.scrollY)
        navbar.classList.add('after');
	if (window.scrollY === 0)
		navbar.classList.remove('after');
});