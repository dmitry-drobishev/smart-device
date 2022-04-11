const aboutOptionalText = document.querySelector('.about__optional-text');
const aboutButton = document.querySelector('.about__button');

const aboutButtonHandler = () => {
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.about__button')) {
      // console.log('zhopa');
      if (document.querySelector('.about__optional-text--hidden')) {
        aboutOptionalText.classList.remove('about__optional-text--hidden');
        aboutButton.textContent = 'Свернуть';
      } else {
        aboutOptionalText.classList.add('about__optional-text--hidden');
        aboutButton.textContent = 'Подробнее';
      }
    }
  });
};

export {aboutButtonHandler};
