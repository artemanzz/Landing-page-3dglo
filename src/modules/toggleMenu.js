/* --- Menu --- */
const toggleMenu = () => {
  const body = document.querySelector('body'),
    menu = document.querySelector('menu'),
    serviceBlockScroll = document.querySelector('a[href="#service-block"]');
  /* > handlerMenu */
  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  /* > Smooth scrolling  */
  const smoothScroll = (e, item) => {
    e.preventDefault();

    const y = document.querySelector(item.hash).getBoundingClientRect().y;
    let yCount = 0,
      idAnimate = 0;

    const scrolling = step => {
      idAnimate = requestAnimationFrame(() => scrolling(step));
      window.scrollBy(0, step);
      yCount += step;
      if (yCount >= y) {
        cancelAnimationFrame(idAnimate);
      }
    };

    switch (item.hash) {
      case '#service-block':
        scrolling(30);
        break;
      case '#portfolio':
        scrolling(35);
        break;
      case '#calc':
        scrolling(40);
        break;
      case '#command':
        scrolling(45);
        break;
      case '#connect':
        scrolling(50);
        break;
    }
  }; // smoothScroll

  body.addEventListener('click', event => {
    const target = event.target;
    let newTarget;
    if (target.closest('.menu')) {
      handlerMenu();
    } else if (target.closest('.close-btn')) {
      handlerMenu();
    } else if ((newTarget = target.closest('.active-menu ul li a'))) {
      handlerMenu();
      smoothScroll(event, newTarget);
    } else if (!target.closest('menu') && menu.classList.contains('active-menu')) {
      handlerMenu();
    } else if ((newTarget = target.closest('a[href="#service-block"]')) === serviceBlockScroll) {
      smoothScroll(event, newTarget);
    }
  });
}; // toggleMenu

export default toggleMenu;