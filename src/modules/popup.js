/* --- Popup --- */
const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupContent = popup.querySelector('.popup-content'),
    popupBtn = document.querySelectorAll('.popup-btn');

  const popupActivate = function () {
    popup.style.display = 'block';
    if (document.documentElement.clientWidth >= 768) {
      let startId = 0,
        Y = -500;
      const readyY = document.documentElement.clientHeight / 2;
      popupContent.style.top = Y + 'px';

      const popupAnimate = () => {
        startId = requestAnimationFrame(popupAnimate);
        Y += 50;
        popupContent.style.top = Y + 'px';
        if (popupContent.getBoundingClientRect().bottom >= readyY + 120) {
          cancelAnimationFrame(startId);
        }
      }; // popupAnimate

      popupAnimate();
    }
  }; // popupActivate

  popupBtn.forEach(item => {
    item.addEventListener('click', popupActivate);
  });
  popup.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });
}; // togglePopup

export default togglePopup;