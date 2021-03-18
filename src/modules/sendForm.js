/* sendAjax */
const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся.';

  const form = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  form.forEach(item => {
    item.append(statusMessage);

    item.addEventListener('submit', e => {
      e.preventDefault();
      let isEmpty = false;
      item.querySelectorAll('input').forEach(i => {
        if (i.value === '') {
          isEmpty = true;
        }
      });

      if (!isEmpty) {
        item.append(statusMessage);
        statusMessage.innerHTML = `
      <div class="load-wrapp">
        <div class="load-3">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>`;
        if (item.id === 'form3') {
          statusMessage.style.cssText += 'color: #fff;';
        }

        const formData = new FormData(item);
        const body = {};
        formData.forEach((value, key) => {
          body[key] = value;
        });

        const postData = (body, successData, errorData, clearInputs) => {
          const request = new XMLHttpRequest();

          request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
              return;
            }
            if (request.status === 200) {
              successData();
              clearInputs();
            } else {
              errorData();
            }
          });

          request.open('POST', './server.php');
          request.setRequestHeader('Content-Type', 'application/json'); //multipart/form-data
          request.send(JSON.stringify(body));
        };

        postData(body,
          () => {
            statusMessage.textContent = successMessage;
            setTimeout(() => {
              statusMessage.innerHTML = '';
              if (item.id === 'form3') document.querySelector('.popup').style.display = 'none';
            }, 3000);
          },
          () => {
            statusMessage.textContent = errorMessage;
            setTimeout(() => statusMessage.innerHTML = '', 3000);
          },
          () => item.querySelectorAll('input').forEach(item => item.value = ''));
      }
    });
  });

};

export default sendForm;