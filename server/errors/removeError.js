import _ from 'lodash';
import { getRandomKeys } from './helpFunction.js';

const removeError = (users, n) => {
  users.forEach((elem) => {
    const wholeNumberError = _.isInteger(n) ? n : Math.floor(n);
    const restPart = n - wholeNumberError;

    for (let i = 0; i < wholeNumberError; i += 1) {
      const randomField = getRandomKeys();
      const randomIndex = _.random(0, elem[randomField].length)
      let stringForModifide = elem[randomField];
      stringForModifide = stringForModifide.replace(stringForModifide[randomIndex], '');
      elem[randomField] = stringForModifide;
    }
    for (let i = 0; i < restPart; i += 1) {
      if (Math.random() <= 0.5) {
        const randomField = getRandomKeys();
        const randomIndex = _.random(0, elem[randomField].length);
        let stringForModifide = elem[randomField];
        stringForModifide = stringForModifide.replace(stringForModifide[randomIndex], '');
        elem[randomField] = stringForModifide;
      }
    }
  })
  return users;
}

export default removeError;
