const ERROR_TIMEOUT = 5000;

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.left = '0';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '60px';
  errorBlock.style.color = 'red';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.padding = '20px';
  errorBlock.style.backgroundColor = 'white';
  errorBlock.textContent = 'Произошла ошибка загрузки';
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

export {onGetFail};
