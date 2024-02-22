import _ from 'lodash';
import removeError from './removeError.js';
import pushError from './pushError.js';
import replaceError from './replaceError.js';

export const getRandomKeys = () => {
  const keys = ['fullname', 'phone', 'address'];
  const index = _.random(0, keys.length - 1);
  const randomField = keys[index];
  return randomField;
}

export const getRandomSymbol = () => {
  const symbols = 'qwertyuiopasdfghjklzxcvbnm';
  const indexSymbol = _.random(0, symbols.length - 1);
  const randomSymbol = symbols[indexSymbol];
  return randomSymbol;
}

export const getRandomFunction = (users, n) => {
  const getRandomIndex = _.random(0, 2);
  switch (getRandomIndex) {
    case 0:
      return pushError(users, n);
    case 1:
      return removeError(users, n);
    case 2:
      return replaceError(users, n);
    default:
      break;
  }
}