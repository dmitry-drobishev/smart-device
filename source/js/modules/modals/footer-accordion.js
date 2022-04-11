const pageFooter = document.querySelector('.page-footer');

function hideAll() {
  const TitleList = pageFooter.querySelectorAll('h3');

  for (let i = 0; i < TitleList.length; i++) {
    TitleList[i].classList.remove('panel-active');
  }
}

const getChangeAccordion = () => {

  pageFooter.addEventListener('click', (evt) => {
    if (evt.targer.tagName !== 'H3') {
      return 0;
    }
    if (evt.targer.classList.contains('panel-active')) {

      hideAll();

    } else {

      hideAll();
      evt.targer.classList.add('panel-active');

    }
  });
};

export {getChangeAccordion};
