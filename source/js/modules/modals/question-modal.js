import {enterCheckbox} from './form';
import IMask from 'imask';

const buttonForm = document.getElementById('question-button');
const checkboxForm = document.getElementById('personal-data-modal');
const modalName = document.querySelector('.modal-question__item--name input');
const modalPhone = document.getElementById('modal-input-phone');
const maskOptions = {mask: '+{7}(000)000-00-00'};

const modalValid = () => {
  checkboxForm.addEventListener('click', () => {
    enterCheckbox(checkboxForm, buttonForm);
  });

  document.addEventListener('DOMContentLoaded', () => {
    IMask(modalPhone, maskOptions);
  });

  modalName.focus();
};

export {modalValid};
