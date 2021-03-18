/* --- Slider --- */
const slider = () => {
  const portfolioSlider = document.querySelector('.portfolio-content'),
    portfolioSlide = document.querySelectorAll('.portfolio-item');
  let currentSlide = 0,
    idInterval;

  /* > addDots */
  const addDots = () => {
    const imgQuantity = portfolioSlider.querySelectorAll('li.portfolio-item').length,
      portfolioDots = document.querySelector('.portfolio-dots');

    for (let i = 0; i < imgQuantity; i++) {
      const element = document.createElement('li');
      element.classList.add('dot');
      if (i === 0) {
        element.classList.add('dot-active');
      }
      portfolioDots.append(element);
    }
  }; // addDots

  addDots();

  const portfolioSliderDots = document.querySelectorAll('.dot');

  /* > prevSlide */
  const hideSlide = (element, index, strClass) => {
    element[index].classList.remove(strClass);
  };

  /* > nextSlide */
  const showSlide = (element, index, strClass) => {
    element[index].classList.add(strClass);
  };

  /* > autoPlaySlide */
  const autoPlaySlide = () => {
    hideSlide(portfolioSlide, currentSlide, 'portfolio-item-active');
    hideSlide(portfolioSliderDots, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= portfolioSlide.length) {
      currentSlide = 0;
    }
    showSlide(portfolioSlide, currentSlide, 'portfolio-item-active');
    showSlide(portfolioSliderDots, currentSlide, 'dot-active');
  }; // autoPlaySlide

  const startSlide = (time = 3000) => idInterval = setInterval(autoPlaySlide, time);
  const stopSlide = () => clearInterval(idInterval);

  /* portfolioSlider.addEventListener(click) */
  portfolioSlider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    }
    hideSlide(portfolioSlide, currentSlide, 'portfolio-item-active');
    hideSlide(portfolioSliderDots, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      portfolioSliderDots.forEach((item, index) => {
        if (item === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= portfolioSlide.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = portfolioSlide.length - 1;
    }

    showSlide(portfolioSlide, currentSlide, 'portfolio-item-active');
    showSlide(portfolioSliderDots, currentSlide, 'dot-active');
  }); // portfolioSlider.addEventListener

  /* > portfolioSlider.addEventListener(mouseover) */
  portfolioSlider.addEventListener('mouseover', event => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      stopSlide();
    }
  });

  /* > portfolioSlider.addEventListener(mouseout) */
  portfolioSlider.addEventListener('mouseout', event => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(3000);
}; // slider

export default slider;