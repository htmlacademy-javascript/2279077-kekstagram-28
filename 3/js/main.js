const DESCRIPTIONS = [
  'Это я',
  'И это сново я',
  'Здесь тоже я',
  'Это я сижу',
  'Это я стою',
  'Это я на красоту смотрю',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Аня',
  'Света',
  'Катя',
  'Ксюша',
  'Егор',
  'Люба',
];

const SIMILAR_PHOTO_COUNT = 25;

let photoId = 1;
let commentId = 1;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENTS)
  ).join(' ');

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };

  commentId += 1;
  return comment;
};

const createPhoto = () => {
  const photo = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(1, 6)}, createComment),
  };

  photoId += 1;

  return photo;
};

const createPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

createPhotos();
