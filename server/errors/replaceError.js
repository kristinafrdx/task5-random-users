import _ from 'lodash';
import { getRandomKeys } from './helpFunction.js';

const replaceError = (users, n) => {
  users.forEach((elem) => {
    const wholeNumberError = _.isInteger(n) ? n : Math.floor(n);
    const restPart = n - wholeNumberError;
    for (let i = 0; i < wholeNumberError; i += 1) {
      const randomField = getRandomKeys();
      const randomIndex = _.random(0, elem[randomField].length - 2)
      let stringForModifide = elem[randomField];
      const nextChar = stringForModifide[randomIndex + 1];
      const firstChar = stringForModifide[randomIndex];
      stringForModifide = stringForModifide.slice(0, randomIndex) + nextChar + firstChar + stringForModifide.slice(randomIndex + 2)
      elem[randomField] = stringForModifide;
    }
    for (let i = 0; i < restPart; i += 1) {
      if (Math.random() <= 0.5) {
        const randomField = getRandomKeys();
        const randomIndex = _.random(0, elem[randomField].length - 2);
        let stringForModifide = elem[randomField];
        const nextChar = stringForModifide[randomIndex + 1];
        const firstChar = stringForModifide[randomIndex];
        stringForModifide = stringForModifide.slice(0, randomIndex) + nextChar + firstChar + stringForModifide.slice(randomIndex + 2)
        elem[randomField] = stringForModifide;
      }
    }
  })
  return users;
}

export default replaceError;
