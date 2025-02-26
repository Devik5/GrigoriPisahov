// Получаем элементы для бургер-меню и оверлея
const burger = document.querySelector('.burger');
const nav = document.querySelector('.side-nav');
const overlay = document.querySelector('.overlay');

// Добавляем обработчик клика для бургер-меню
burger.addEventListener('click', function () {
    this.classList.toggle('clicked');
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.classList.toggle('overflow');
});

// Закрываем меню при клике на оверлей
overlay.addEventListener('click', function () {
    burger.classList.remove('clicked');
    nav.classList.remove('show');
    overlay.classList.remove('show');
    document.body.classList.remove('overflow');
});
