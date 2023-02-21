// Функция для проверки длины строки
const checkLength = (string, length) => string.length <= length;
checkLength ();

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  string = string.toLowerCase().replace(/\s/g,'');
  return string === string.split('').reverse().join('');
};
checkPalindrome ();

//Функция, которая извлекает цифры из строки
const getNumbers = (string) => {
  string = string.replace(/\D/g,'');
  return parseInt(string, 10);
};
getNumbers();

//Функция, которая принимает три параметра
const createNewString = (string, length, extension) => {
  if (string.length >= length) {
    return string;
  }

  while (string.length < length) {
    string = extension.slise(0, length - string.length) + string;
  }

  return string;
};
createNewString();
