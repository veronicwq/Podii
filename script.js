// 1. Зміна кольору фону через радіокнопки
const radios = document.querySelectorAll('input[name="color"]');
radios.forEach(radio => {
  radio.addEventListener('change', event => {
    document.body.style.backgroundColor = event.target.value;
  });
});

// 2. Відображення імені
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const value = nameInput.value.trim();
  nameOutput.textContent = value === '' ? 'незнайомець' : value;
});

// 2. Перевірка довжини введеного тексту
const validationInput = document.querySelector('#validation-input');
const requiredLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});

// 3. Повзунок для зміни розміру тексту
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = fontSizeControl.value + 'px';
});