import _ from 'lodash';
import { getRandomKeys, getRandomSymbol } from './helpFunction.js';

const pushError = (users, n) => {
  users.forEach((elem) => {
    const wholeNumberError = _.isInteger(n) ? n : Math.floor(n);
    const restPart = n - wholeNumberError;

    for (let i = 0; i < wholeNumberError; i += 1) {
      const randomField = getRandomKeys();
      const randomSymbol = getRandomSymbol();
      const randomIndex = _.random(0, elem[randomField].length)
      elem[randomField] = elem[randomField].slice(0, randomIndex) + randomSymbol + elem[randomField].slice(randomIndex);
    }
    for (let i = 0; i < restPart; i += 1) {
      if (Math.random() <= 0.5) {
        const randomField = getRandomKeys();
        const randomSymbol = getRandomSymbol();
        const randomIndex = _.random(0, elem[randomField].length)
        elem[randomField] = elem[randomField].slice(0, randomIndex) + randomSymbol + elem[randomField].slice(randomIndex);
      }
    }
  })
  return users;
}
export default pushError;
