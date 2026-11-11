document.addEventListener('DOMContentLoaded', function() {
    // Находим элементы
    const typeSelect = document.getElementById('calc-type');
    const areaInput = document.getElementById('calc-area');
    const totalDisplay = document.getElementById('calc-total');

    // Функция для расчёта
    function calculateTotal() {
        // Берем цену за м²
        const pricePerM2 = parseFloat(typeSelect.value) || 0;
        
        // Берем площадь
        const area = parseFloat(areaInput.value) || 0;
        
        // Считаем итоговую стоимость
        const total = area * pricePerM2;

        // Форматируем число (190000 -> 190 000)
        const formattedTotal = new Intl.NumberFormat('ru-RU').format(total);

        // Выводим на экран
        totalDisplay.textContent = formattedTotal + ' ₽';
    }

    // Запускаем расчёт при загрузке
    calculateTotal();

    // Добавляем событие: если меняется материал или площадь — пересчитываем
    if (typeSelect && areaInput) {
        typeSelect.addEventListener('change', calculateTotal);
        areaInput.addEventListener('input', calculateTotal);
    }
});
    // Логика для бургер-меню
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', function() {
            // Переключаем классы для анимации
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
        // Логика для аккордеона (спойлеров)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            item.classList.toggle('active');
            
            const content = this.nextElementSibling;
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    // Логика для камеры
function onCameraLoaded() {
    const loader = document.getElementById('camera-loading');
    if (loader) loader.style.display = 'none';
}

function onCameraError() {
    const loader = document.getElementById('camera-loading');
    const error = document.getElementById('camera-error');
    if (loader) loader.style.display = 'none';
    if (error) error.style.display = 'flex';
}

function reloadCamera() {
    const error = document.getElementById('camera-error');
    const loader = document.getElementById('camera-loading');
    const iframe = document.getElementById('camera-frame');
    
    if (error) error.style.display = 'none';
    if (loader) loader.style.display = 'flex';
    if (iframe) iframe.src = iframe.src; // Перезагружаем iframe
}
    // Логика для баннера Cookie
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');

    if (cookieBanner && cookieAccept) {
        // Проверяем, нажимал ли уже пользователь "ОК"
        const isCookieAccepted = localStorage.getItem('cookieAccepted');

        // Если не нажимал — показываем баннер с небольшой задержкой (чтобы не пугать сразу)
        if (!isCookieAccepted) {
            setTimeout(() => {
                cookieBanner.style.display = 'block';
            }, 1000);
        }

        // Обработка клика по кнопке "ОК"
        cookieAccept.addEventListener('click', function() {
            cookieBanner.style.display = 'none';
            // Запоминаем выбор в браузере пользователя
            localStorage.setItem('cookieAccepted', 'true');
        });
    }