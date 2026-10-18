// Находим кнопку на странице
const button = document.getElementById('checkBtn');

// Говорим кнопке, что делать при клике
button.addEventListener('click', function() {
  
  // Создаем 3 переменные и записываем в них то, что ввел пользователь (.value)
  let name = document.getElementById('userName').value;
  let age = document.getElementById('userAge').value;
  let city = document.getElementById('userCity').value;

  // Выводим эти переменные в консоль
  console.log("--- Информация обо мне ---");
  console.log("Имя:", name);
  console.log("Возраст:", age);
  console.log("Город:", city);
  
  alert("Данные отправлены в консоль! Открой консоль (F12), чтобы посмотреть.");
});