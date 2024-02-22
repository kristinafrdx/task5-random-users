import express from 'express';
import cors from 'cors';
import { fakerES, fakerEN, fakerFR } from '@faker-js/faker';
import { getRandomFunction } from './errors/helpFunction.js';

const app = () => {
  const PORT = 3030;
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  
  const fakers = {
    en: fakerEN,
    fr: fakerFR,
    es: fakerES,
  }

  const getFaker = (reg, seed) => {
    const faker = fakers[getLocaleByRegion(reg)];
    faker.seed(seed);
    return faker;
  }

  function getLocaleByRegion(region) {
    switch (region) {
      case 'FRANCE':
        return 'fr';
      case 'SPAIN':
        return 'es';
      case 'UK':
        return 'en';
      default:
        return 'en';
    }
  }
  
  function createRandomUser(region, seed, length) {
    const users = [];
    const currentFaker = getFaker(region, seed);

    for (let i = 0; i < length; i += 1) {
      const country = currentFaker.location.country();
      const state = currentFaker.location.city();
      const street = currentFaker.location.street();
      const numberBuild = currentFaker.location.buildingNumber();
      const phone = currentFaker.phone.number();
      const fullname = currentFaker.person.fullName();
      const id = currentFaker.string.uuid();
    
      const address = `${country}, ${state}, ${street}, ${numberBuild}`;
      users.push({ id, fullname, address, phone });
    }
    return users;
  };

  app.post('/users', (req, res) => {
    const { region, seed, errors, length } = req.body;
    const users = createRandomUser(region, seed, length);
    if (errors === 0) {
      res.send(users)
    } else {
      const exchangeUsers = getRandomFunction(users, errors);
      res.send(exchangeUsers);
    }
  });

  app.listen(PORT, () => {
    console.log(`SERVER IS RUNNIG on port: ${PORT}`)
  })
}
app()
