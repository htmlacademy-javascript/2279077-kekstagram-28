import {createPhotos} from './data.js';
import {openBigPicture} from './big-picture.js';
import {closeBigPicture} from './big-picture.js';
import {isEscapeKey} from './util.js';

const pictures = createPhotos();
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({comments, description, likes, url}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  thumbnail.addEventListener('click', () => {
    openBigPicture();
  });

  document.addEventListener('keydown', (event) => {
    if (isEscapeKey(event)) {
      event.preventDefault();
      closeBigPicture();
    }
  });
  return thumbnail;
};

const renderThumbnails = () => {
  pictures.forEach((picture) => container.append(createThumbnail(picture)));
};

export {renderThumbnails};
