// script.js
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.querySelector('.profile-icon img').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.profile-icon .dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Fechar o menu suspenso se clicar fora dele
document.addEventListener('click', function (event) {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdownMenu = document.querySelector('.profile-icon .dropdown-menu');
    if (!profileIcon.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
