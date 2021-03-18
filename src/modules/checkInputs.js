/* --- Check Inputs --- */
const checkInputs = (...forms) => {
  const calcBlock = document.querySelector('.calc-block');
  const checkCalcBlockInputs = () => {
    calcBlock.addEventListener('input', event => {
      const target = event.target;
      if (target.matches('input.calc-item')) {
        target.value = target.value.replace(/\D/, '');
      }
    });
  };

  const blockInputChars = event => {
    const target = event.target;
    if (target.matches('input#form1-name, input#form2-name, input#form3-name, input#form2-message'))
      target.value = target.value.replace(/[^а-яё\s-]/ig, '');
    if (target.matches('input#form1-email, input#form2-email, input#form3-email')) {
      target.value = target.value.replace(/[^a-z@-_\.\!\~\*\']/ig, '');
      target.value = target.value.replace(/@.*@/g, match => match = match.substring(0, match.length - 1));
      target.value = target.value.replace(/@(.+)/g, (match, val) => {
        let correctStr = '',
          dot = 0,
          afterDot = 3;
        for (let i = 0; i < val.length; i++) {
          if (/[a-z]/.test(val[i]) && !dot) {
            correctStr += val[i];
          }
          if (/\./.test(val[i]) && !dot) {
            if (correctStr === '') return '';
            correctStr += val[i];
            dot++;
          }
          if (/[a-z]/.test(val[i]) && dot && afterDot) {
            correctStr += val[i];
            afterDot--;
          }
        }
        return '@' + correctStr;
      });
    }
    if (target.matches('input#form1-phone, input#form2-phone, input#form3-phone')) {
      target.value = target.value.replace(/[^\d-()\+]/g, '');
      target.value = target.value.replace(/(.+)/g, (match, val) => {
        let mask = '8(___)___-__-__',
          reg = '',
          correctStr = '',
          i = 0;

        if (/\+/.test(val[0])) {
          correctStr += '+';
          i++;
          mask = '+7' + mask.substring(1, mask.length);

        }

        for (i; i < val.length; i++) {
          if (i < mask.length) {
            mask[i] === '8' ? reg = /8/ :
              mask[i] === '7' ? reg = /7/ :
              mask[i] === '_' ? reg = /\d/ :
              mask[i] === '(' ? reg = /[\d\(]/ :
              mask[i] === ')' ? reg = /[\)]/ :
              mask[i] === '-' ? reg = /[\d-]/ : '';

            if (reg.test(val[i])) {
              if (reg.test('(') && !/\(/.test(val[i])) {
                mask = mask.split(/[\(\)]/);
                mask = mask.join('');
              }
              if (reg.test('-') && !/-/.test(val[i])) {
                mask = mask.split(/-/);
                mask = mask.join('');
              }
              correctStr += val[i];
            }
          }
        }
        return correctStr;
      });
    }
  };

  const validation = event => {
    const target = event.target;

    blockInputChars(event);

    if (target.matches('input#form1-name, input#form2-name, input#form3-name')) {
      const str = target.value.split(' ');
      str.forEach((item, i, arr) => arr[i] = item.replace(/^./, match => match.toUpperCase()));
      target.value = str.join(' ');
    }
    target.value = target.value.replace(/ +/g, ' ');
    target.value = target.value.replace(/(\s*-\s*)+/g, '-');
    target.value = target.value.replace(/(\s*@\s*)+/g, '@');
    target.value = target.value.replace(/-\s?$/g, '');

    target.value = target.value.trim();
  };

  if (forms) {
    forms.forEach(item => {
      item.addEventListener('input', blockInputChars);

      for (const i in item) {
        if (item.hasOwnProperty(i) && item[i].nodeName !== 'BUTTON') {
          item[i].addEventListener('blur', validation);
        }
      }
    });
  }
  checkCalcBlockInputs();
}; // checkInputs

export default checkInputs;