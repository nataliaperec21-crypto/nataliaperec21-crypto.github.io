// 1. ИЩЕМ КНОПКУ ПО ЕЁ ID
// const (Константа / железный сейф)
// document (Документ / вся страница)
// getElementById (Получить Элемент По Идентификатору ID)
const button = document.getElementById('checkBtn');

// 2. ВЕШАЕМ НА КНОПКУ ДАТЧИК КЛИКА
// button (наша кнопка)
// addEventListener (Добавить Слушатель События / повесить датчик)
// 'click' (событие щелчка мыши)
// function() (инструкция / функция, которая сработает после щелчка)
button.addEventListener('click', function() {
  
  // 3. ЗАБИРАЕМ ТЕКСТ ИЗ ПОЛЯ ИМЕНИ
  // let (Переменная / картонная коробка)
  // name (Имя нашей коробки)
  // value (Значение / то, что пользователь ввёл руками в инпут)
  let name = document.getElementById('userName').value;

  // 4. ЗАБИРАЕМ ЦИФРЫ ИЗ ПОЛЯ ВОЗРАСТА
  // age (Имя коробки для возраста)
  let age = document.getElementById('userAge').value;

  // 5. ЗАБИРАЕМ ТЕКСТ ИЗ ПОЛЯ ГОРОДА
  // city (Имя коробки для города)
  let city = document.getElementById('userCity').value;

  // 6. ВЫВОДИМ В ЖУРНАЛ КРАСИВЫЙ ОТВЕТ
  // console.log (Записать в Журнал Консоли / панель F12)
  // Косые кавычки `` (клавиша Ё) позволяют вставлять коробки через \${}
  console.log(`Привет, ${name}! Тебе уже ${age} лет, и ты живешь в шикарном городе ${city}!`);
  
  // 7. МЕНЯЕМ ЦВЕТ ФОНА НА СВЕТЛО-ЗЕЛЕНЫЙ
  // querySelector (Поиск По Селектору / ищет класс .task-container, как в CSS)
  // style (Стиль / залезть в CSS свойства)
  // backgroundColor (Цвет фона)
  document.querySelector('.task-container').style.backgroundColor = "lightgreen";
  
  // 8. ПОКАЗЫВАЕМ ВСПЛЫВАЮЩЕЕ ОКНО-ПРЕДУПРЕЖДЕНИЕ
  // alert (Сигнал / всплывающее окошко на экране)
  alert("Данные обработаны! Загляни в консоль и посмотри на карточку.");
});