const pageFooter = document.querySelector('.page-footer');

pageFooter.classList.remove('page-footer__nojs');

function hideAll() {
  const TitleList = pageFooter.querySelectorAll('.accordion__handler');

  for (let i = 0; i < TitleList.length; i++) {
    TitleList[i].classList.remove('panel-active');
  }
}

const getChangeAccordion = () => {
  if (window.screen.width < 768) {

    pageFooter.addEventListener('click', (evt) => {
      if (evt.target.tagName !== ('H3')) {
        return 0;
      }
      if (evt.target.classList.contains('panel-active')) {
        hideAll();
      } else {
        hideAll();
        evt.target.classList.add('panel-active');
      }
      return 1;
    });
  }
};

export {getChangeAccordion};
