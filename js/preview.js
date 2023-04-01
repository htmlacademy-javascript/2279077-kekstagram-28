const imageChooser = document.querySelector('#upload-file');
const imagePreview = document.querySelector('.img-upload__preview img');

imageChooser.addEventListener('change', () => {
  const image = imageChooser.files[0];
  imagePreview.src = URL.createObjectURL(image);
});
