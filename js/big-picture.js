const COMMENTS_COUNTER = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentsList = document.querySelector('.social__comments');
const socialCommentsItem = document.querySelector('.social__comment');
const socialCommentsLoader = document.querySelector('.social__comments-loader');
const socialCommentsCount = document.querySelector('.social__comment-count');

let comments = [];
let showingComments = 0;

const fillCommentCount = () => {
  socialCommentsCount.innerHTML = `${showingComments} из <span class = "comments-count">${comments.length}</span> комментариев`;
};

const createComment = (comment) => {
  const commentTemplate = socialCommentsItem.cloneNode(true);
  const img = commentTemplate.querySelector('.social__picture');
  commentTemplate.querySelector('.social__text').textContent = comment.message;
  img.src = comment.avatar;
  img.alt = comment.name;

  return commentTemplate;
};

const renderComments = () => {
  const currentComments = comments.slice(showingComments, showingComments + COMMENTS_COUNTER);
  showingComments += COMMENTS_COUNTER;
  showingComments = Math.min(showingComments, comments.length);
  currentComments.forEach((comment) => socialCommentsList.append(createComment(comment)));
  fillCommentCount();
  if (showingComments >= comments.length) {
    socialCommentsLoader.classList.add('hidden');
    return;
  }
  socialCommentsLoader.classList.remove('hidden');
};

const fillBigPicture = (data) => {
  socialCaption.textContent = data.description;
  bigPictureImg.alt = data.description;
  bigPictureImg.src = data.url;
  likesCount.textContent = data.likes;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  bigPictureCloseBtn.removeEventListener('click', onBigPictureCloseClick);
  socialCommentsLoader.removeEventListener('click', onSocialCommentsLoaderClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  comments = [];
  showingComments = 0;
};

const openBigPicture = (data) => {
  socialCommentsList.innerHTML = '';
  comments = data.comments;
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fillBigPicture(data);
  renderComments();
  bigPictureCloseBtn.addEventListener('click', onBigPictureCloseClick);
  socialCommentsLoader.addEventListener('click', onSocialCommentsLoaderClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function onSocialCommentsLoaderClick (evt) {
  evt.preventDefault();
  renderComments();
}

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape' && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function onBigPictureCloseClick (evt) {
  evt.preventDefault();
  closeBigPicture();
}

export {openBigPicture};
