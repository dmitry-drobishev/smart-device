const telRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const userPhoneInput = document.querySelector('.form__item--phone input');
const userCheckbox = document.querySelector('.form__checkbox input');
const buttonHandler = document.getElementById('form-button');

const enterUserPhone = () => {

  if (!telRegexp.test(userPhoneInput.value)) {
    userPhoneInput.setCustomValidity(`- номер телефона состоит из 11 цифр;
    - в номере телефона не может быть букв`);
  } else {
    userPhoneInput.setCustomValidity('');
  }
  userPhoneInput.reportValidity();
};

const enterCheckbox = () => {
  if (userCheckbox.checked !== true) {
    buttonHandler.disabled = true;
  } else {
    buttonHandler.disabled = false;
  }
};

export {enterCheckbox, enterUserPhone};
