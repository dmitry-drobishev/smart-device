const pageFooter = document.querySelector('.page-footer__wrapper');

pageFooter.classList.remove('page-footer__wrapper--nojs');

function hideAll() {
  const TitleList = pageFooter.querySelectorAll('.page-footer__accordion-handler');

  for (let i = 0; i < TitleList.length; i++) {
    TitleList[i].classList.remove('page-footer__accordion-item-active');
  }
}

const getChangeAccordion = () => {
  if (window.screen.width < 768) {

    pageFooter.addEventListener('click', (evt) => {
      if (evt.target.tagName !== ('H3')) {
        return 0;
      }
      if (evt.target.classList.contains('page-footer__accordion-item-active')) {
        hideAll();
      } else {
        hideAll();
        evt.target.classList.add('page-footer__accordion-item-active');
      }
      return 1;
    });
  }
};

export {getChangeAccordion};
