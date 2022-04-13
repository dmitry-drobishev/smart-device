import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {aboutButtonHandler} from './modules/modals/about';
import {getChangeAccordion} from './modules/modals/footer-accordion';
import {enterCheckbox} from './modules/modals/form';

aboutButtonHandler();

getChangeAccordion();

const userCheckbox = document.querySelector('.form__checkbox input');
const buttonHandler = document.getElementById('form-button');

userCheckbox.addEventListener('click', () => {
  enterCheckbox(userCheckbox, buttonHandler);
});

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.form__item--phone input'); // ищем наш единственный input
  const maskOptions = {mask: '+{7}(000)000-00-00'};
  IMask(inputElement, maskOptions); // запускаем плагин с переданными параметрами
});

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.getElementById('modal-input-phone');
  const maskOptions = {mask: '+{7}(000)000-00-00'};
  IMask(inputElement, maskOptions); // запускаем плагин с переданными параметрами
});

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
