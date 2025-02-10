// script.js

const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const body = document.body;

// Check if dark mode is already set in localStorage
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

sunIcon.addEventListener('click', () => {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
});

moonIcon.addEventListener('click', () => {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
});
