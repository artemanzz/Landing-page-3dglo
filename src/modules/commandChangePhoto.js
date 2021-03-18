/* ---Command change photo ---*/
const commandChangePhoto = () => {
  const command = document.getElementById('command');
  const element = {
    elem: '',
    originalSrc: ''
  };

  const changePhoto = event => {
    const target = event.target;
    if (target.matches('img.command__photo')) {
      if (!element.elem) {
        element.elem = target;
        element.originalSrc = target.src;
        element.elem.src = element.elem.dataset.img;
      }
    } else {
      if (element.elem) {
        element['elem'].src = element.originalSrc;
        element.elem = '';
        element.originalSrc = '';
      }
    }
  }; // changePhoto

  command.addEventListener('mouseover', changePhoto);
  command.addEventListener('mouseout', changePhoto);
}; // commandChangePhoto

export default commandChangePhoto;