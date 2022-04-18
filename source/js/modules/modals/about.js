const aboutOptionalText = document.querySelector('.about__optional-text');
const aboutOptionalTextMobile = document.querySelector('.about__optional-text-mobile');
const aboutButton = document.querySelector('.about__button');
const aboutInformationWrapper = document.querySelector('.about__information-wrapper');

const aboutButtonHandler = () => {

  aboutInformationWrapper.classList.remove('about__information-wrapper--nojs');

  if (window.screen.width < 768) {
    aboutOptionalTextMobile.classList.add('about__optional-text-mobile--hidden');
  }

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.about__button')) {
      if (document.querySelector('.about__optional-text--hidden')) {
        aboutOptionalText.classList.remove('about__optional-text--hidden');

        if (window.screen.width < 768) {
          aboutOptionalTextMobile.classList.remove('about__optional-text-mobile--hidden');
        }

        aboutButton.textContent = 'Свернуть';
      } else {
        aboutOptionalText.classList.add('about__optional-text--hidden');

        if (window.screen.width < 768) {
          aboutOptionalTextMobile.classList.add('about__optional-text-mobile--hidden');
        }
        aboutButton.textContent = 'Подробнее';
      }
    }
  });
};

export {aboutButtonHandler};
