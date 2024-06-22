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

const notifications = [
    "Você possui novo um e-mail sobre seu processo de intercâmbio.",
    "Você possui uma pendência no financeiro.",
    "A aula de S205 do dia 25/06 será no formato assíncrono. Mais informações pelo Teams."
];
let currentNotificationIndex = 0;

document.getElementById('open-dialog').addEventListener('click', function () {
    currentNotificationIndex = 0;
    showNotification();
    document.getElementById('dialog').classList.add('mdc-dialog--open');
    document.getElementById('dialog').classList.remove('mdc-dialog--closed');
});

document.getElementById('next-notification').addEventListener('click', function () {
    currentNotificationIndex++;
    if (currentNotificationIndex < notifications.length) {
        showNotification();
    } else {
        closeDialog();
    }
});

document.getElementById('close-dialog').addEventListener('click', function () {
    closeDialog();
});

function showNotification() {
    document.getElementById('my-dialog-content').textContent = notifications[currentNotificationIndex];
    document.getElementById('next-notification').style.display = currentNotificationIndex < notifications.length - 1 ? 'inline-block' : 'none';
    document.getElementById('close-dialog').style.display = currentNotificationIndex === notifications.length - 1 ? 'inline-block' : 'none';
}

function closeDialog() {
    document.getElementById('dialog').classList.add('mdc-dialog--closed');
    document.getElementById('dialog').classList.remove('mdc-dialog--open');
}

