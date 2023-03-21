import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = document.querySelector('.big-picture__cancel');
const bigPhotoPreview = document.querySelector('.big-picture__preview');
const commentsContainer = bigPhotoPreview.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');


const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const renderComments = (comments) => {
  comments.forEach((comment) => commentsContainer.append(createComment(comment)));
};

const fillBigPicture = (data) => {
  bigPhotoPreview.querySelector('.big-picture__img img').src = data.url;
  bigPhotoPreview.querySelector('.big-picture__img img').alt = data.description;
  bigPhotoPreview.querySelector('.likes-count').textContent = data.likes;
  bigPhotoPreview.querySelector('.comments-count').textContent = data.comments.length;
  bigPhotoPreview.querySelector('.social__caption').textContent = data.description;

  commentsContainer.innerHTML = '';
  renderComments(data.comments);
  bigPhotoPreview.querySelector('.social__comment-count').classList.add('hidden');
  bigPhotoPreview.querySelector('.comments-loader').classList.add('hidden');
};

const onDocumentKeydown = (event) => {
  console.log(event);
  if (isEscapeKey(event)) {
    event.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCloseClick = (event) => {
  event.preventDefault();
  closeBigPicture();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  bigPictureCloseBtn.removeEventListener('click', onBigPictureCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureCloseBtn.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);

  fillBigPicture(data);
};

export {openBigPicture};
