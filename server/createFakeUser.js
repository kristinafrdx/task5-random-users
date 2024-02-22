import { fakerES, fakerEN, fakerFR } from '@faker-js/faker';

let reg;
// let seed;
function getLocaleByRegion(region) {
  switch (region) {
    case 'FRANCE':
      return fr;
    case 'SPAIN':
      return es;
    case 'UK':
      return en;
    default:
      return en;
  }
}
// const currentFaker = new Faker({
//     locale: [customLocale, reg || en, base]
// });

const fakers = {
    en: fakerEN,
    fr: fakerFR,
    es: fakerES
}

const getFaker = (reg, seed) => {
    const faker = fakers[reg]
    faker.seed(seed)
    return faker
}

const faker1 = getFaker('en', 10)
console.log(faker1.person.firstName())
console.log(faker1.person.firstName())

const faker2 = getFaker('en', 11)
console.log(faker2.person.firstName())
console.log(faker2.person.firstName())

const faker3 = getFaker('en', 10)
console.log(faker3.person.firstName())
console.log(faker3.person.firstName())