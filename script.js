document.addEventListener('DOMContentLoaded', function() {

    const tg = window.Telegram.WebApp;

    tg.ready();        // Сообщаем Telegram, что приложение готово
    tg.expand();       // Разворачиваем приложение на всю доступную высоту

    // Здесь можно работать с темой, кнопками и т.д.
    console.log('Telegram WebApp инициализирован');
});
