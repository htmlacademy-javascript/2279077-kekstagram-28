const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = document.querySelector('.big-picture__cancel');

const fillBigPicture = (data) => {
  console.log(data);
};

const onBigPictureCloseClick = (event) => {
  event.preventDefault();
  closeBigPicture();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCloseBtn.removeEventListener('click', onBigPictureCloseClick);
};

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  fillBigPicture(data);

  bigPictureCloseBtn.addEventListener('click', onBigPictureCloseClick);
};


export {openBigPicture, closeBigPicture};
