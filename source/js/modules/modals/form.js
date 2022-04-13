// функция выключает кнопку отправки форму при ненажатом чекбоксе

const enterCheckbox = (userCheckbox, buttonHandler) => {
  if (userCheckbox.checked !== true) {
    buttonHandler.disabled = true;
  } else {
    buttonHandler.disabled = false;
  }
};

export {enterCheckbox};
