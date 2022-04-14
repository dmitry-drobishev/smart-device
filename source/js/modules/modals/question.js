import {enterCheckbox} from './form';
import IMask from 'imask';

const userCheckbox = document.querySelector('.form__checkbox input');
const buttonHandler = document.getElementById('form-button');
const inputElement = document.getElementById('phone');
const maskOptions = {mask: '+{7}(000)000-00-00'};

const formValid = () => {
  userCheckbox.addEventListener('click', () => {
    enterCheckbox(userCheckbox, buttonHandler);
  });

  document.addEventListener('DOMContentLoaded', () => {
    IMask(inputElement, maskOptions);
  });
};

export {formValid};
