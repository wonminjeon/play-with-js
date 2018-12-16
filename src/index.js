let currentPosition = 'TL';
let box = document.querySelector('.box');
let btn_tl = document.querySelector('.tl');
let btn_tr = document.querySelector('.tr');

btn_tl.addEventListener('click', () => {
  let { x: currentX } = box.getBoundingClientRect();

  if (currentPosition === 'TR') {
    while (currentX > 0) {
      box.style.transform = `translate(${(currentX -= 1)}px, 0)`;
    }
    currentPosition = 'TL';
    btn_tl.setAttribute('disabled', true);
    btn_tr.removeAttribute('disabled');
  }
});

btn_tr.addEventListener('click', () => {
  let { x: currentX, width: boxWidth } = box.getBoundingClientRect();

  if (currentPosition === 'TL') {
    while (currentX < window.innerWidth - boxWidth) {
      box.style.transform = `translate(${(currentX += 1)}px, 0)`;
    }
    currentPosition = 'TR';
    btn_tr.setAttribute('disabled', true);
    btn_tl.removeAttribute('disabled');
  }
});
