const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');



//dark mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0  / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    // image1.src = 'img/undraw_Work_chat_dark.svg';
    // image2.src = 'img/undraw_teamwork_dark.svg';
    // image3.src = 'img/undraw_Social_networking_dark.svg';
}

//light mode styles
function LightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255  / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    // image1.src = 'img/undraw_Work_chat_light.svg';
    // image2.src = 'img/undraw_teamwork_light.svg';
    // image3.src = 'img/undraw_Social_networking_light.svg';
}

//switch theme dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
        ValidateEmail();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//event listener
toggleSwitch.addEventListener('change', switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}

