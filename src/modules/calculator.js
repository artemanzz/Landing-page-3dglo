/* --- Calculator --- */
const calculator = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');

  calcBlock.addEventListener('change', event => {
    const target = event.target;

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;

      const typeValue = +calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      // > totalValueAnimation
      const totalValueAnimation = () => {
        const time = {
          start: null,
          total: 1000
        };

        const animate = now => {
          if (!time.start) time.start = now;
          const progress = Math.min((now - time.start) / time.total, 1),
            count = progress * total;
          totalValue.textContent = Math.ceil(count);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }; // totalValueAnimation

      totalValueAnimation();
    };

    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
}; // calculator

export default calculator;