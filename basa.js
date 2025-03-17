
// Ожидаем загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', () => {
  // Получаем элементы DOM
  const messageBtn = document.getElementById('message-btn');
  const followBtn = document.getElementById('follow-btn');
  const numberLike = document.querySelector('.analytics .data:nth-child(1) .number');
  const heartIcon = document.querySelector('.analytics .data:nth-child(1) i');
  const numberShare = document.querySelector('.analytics .data:nth-child(3) .number');
  const shareIcon = document.querySelector('.analytics .data:nth-child(3) i');
  const numberMsg = document.querySelector('.analytics .data:nth-child(2) .number');
  const messageIcon = document.querySelector('.analytics .data:nth-child(2) i');

  // Ссылки на соцсети
  const telegramLink = document.querySelector('.telegram-link'); // Ссылка на Telegram
  const instagramLink = document.querySelector('.instagram-link'); // Ссылка на Instagram
  const vkLink = document.querySelector('.vk-link'); // Ссылка на TikTok

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;


  // Функция для загрузки значений из localStorage
  const loadCounters = () => {
    if (localStorage.getItem('likes')) {
      numberLike.textContent = localStorage.getItem('likes'); // Загружаем лайки
    }
    if (localStorage.getItem('shares')) {
      numberShare.textContent = localStorage.getItem('shares'); // Загружаем "Поделиться"
    }
    if (localStorage.getItem('messages')) {
      numberMsg.textContent = localStorage.getItem('messages'); // Загружаем "Поделиться"
    }
  };


  
    // Проверяем, какая тема сохранена в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        }
    }


  // Функция для сохранения значений в localStorage
  const saveCounter = (key, value) => {
    localStorage.setItem(key, value); // Сохраняем значение в localStorage
  };

// Загружаем счетчики при загрузке страницы
  loadCounters();

  if (followBtn && numberLike) {
    followBtn.addEventListener('click', () => {
      let currentLike = parseInt(numberLike.textContent); // Получаем текущее значение лайков
      numberLike.textContent = currentLike + 1; // Увеличиваем значение на 1
      saveCounter('likes', numberLike.textContent); // Сохраняем новое значение

  // Добавляем класс pulse для запуска анимации
  heartIcon.classList.add('pulse');  
  // Удаляем класс pulse через 500 мс, чтобы анимация не повторялась бесконечно
  setTimeout(() => heartIcon.classList.remove('pulse'), 500);
    });
  } else {
    console.error('Элементы не найдены! Проверьте селекторы.');
  }

  if (messageBtn && numberMsg) {
    messageBtn .addEventListener('click', () => {
      let currentLike = parseInt(numberMsg.textContent); // Получаем текущее значение лайков
      numberMsg.textContent = currentLike + 1; // Увеличиваем значение на 1
      saveCounter('messages', numberMsg.textContent); // Сохраняем новое значение

  // Добавляем класс pulse для запуска анимации
  messageIcon.classList.add('pulse');  
  // Удаляем класс pulse через 500 мс, чтобы анимация не повторялась бесконечно
  setTimeout(() => messageIcon.classList.remove('pulse'), 500);
    });
  } else {
    console.error('Элементы не найдены! Проверьте селекторы.');
  }


  

  // Функция для увеличения счетчика "Поделиться" и открытия ссылки в новой вкладке
  const handleShareClick = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    let currentShare = parseInt(numberShare.textContent); // Получаем текущее значение "Поделиться"
    numberShare.textContent = currentShare + 1; // Увеличиваем значение на 1
    saveCounter('shares', numberShare.textContent); // Сохраняем новое значение



    shareIcon.classList.add('pulse');  
  // Удаляем класс pulse через 500 мс, чтобы анимация не повторялась бесконечно
  setTimeout(() => shareIcon.classList.remove('pulse'), 500);
        // Открываем ссылку в новой вкладке
    const url = event.currentTarget.href; // Получаем URL ссылки
    window.open(url, '_blank'); // Открываем в новой вкладке
  };

  // Добавляем обработчики для ссылок
  if (telegramLink && instagramLink && vkLink && numberShare) {
    telegramLink.addEventListener('click', handleShareClick);
    instagramLink.addEventListener('click', handleShareClick);
    vkLink.addEventListener('click', handleShareClick);
  } else {
    console.error('Ссылки или счетчик "Поделиться" не найдены! Проверьте селекторы.');
  }


  
const iconClick = (event) => {
    // Получаем иконку, на которую был произведен клик
    const clickedIcon = event.currentTarget;
    // Добавляем класс pulse для анимации
    clickedIcon.classList.add('pulse');
    // Удаляем класс pulse через 500 мс
    setTimeout(() => clickedIcon.classList.remove('pulse'), 500);
};

  // Добавляем обработчики для ссылок
  if (heartIcon && shareIcon && messageIcon) {
    heartIcon.addEventListener('click', iconClick);
    shareIcon.addEventListener('click', iconClick);
    messageIcon.addEventListener('click', iconClick);
  } else {
    console.error('Ссылки или счетчик "Поделиться" не найдены! Проверьте селекторы.');
  }



    // Обработчик клика для кнопки смены темы
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'light-theme');
        }
    });

  

  
});
