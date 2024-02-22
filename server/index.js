import express from 'express';
import { faker } from '@faker-js/faker';
import cors from 'cors';
import { base, es, fr, en_GB, Faker, en, fakerES, fakerEN, fakerFR } from '@faker-js/faker';
import { getRandomFunction } from './errors/helpFunction.js';

const app = () => {
  const PORT = 3030;
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  
  // const defaultRegion = 'UK';
  // let seed;
  const customLocale = {
    title: 'My custom locale',
  }
  
  const fakers = {
    en: fakerEN,
    fr: fakerFR,
    es: fakerES
  }

  const getFaker = (reg, seed) => {
    // console.log(seed)
    const faker = fakers[getLocaleByRegion(reg)]
    // console.log(faker)
    faker.seed(seed)
    return faker
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
    // const currentFaker = new Faker({
    //   locale: [customLocale, getLocaleByRegion(region), base]
    // });
    // currentFaker.seed(seed);
    // console.log(seed)
    const users = [];
    const currentFaker = getFaker(region, seed);
    // console.log(seed)
    for (let i = 0; i < length; i += 1) {
    const country = currentFaker.location.country();
    const state = currentFaker.location.city();
    const street = currentFaker.location.street();
    const numberBuild = currentFaker.location.buildingNumber();
    const phone = currentFaker.phone.number();
    const fullname = currentFaker.person.fullName();
    const id = currentFaker.string.uuid();
  
    const address = `${country}, ${state}, ${street}, ${numberBuild}`
    users.push({id, fullname, address, phone})
  }
    return users;
  }

  app.post('/users', (req, res) => {
    const { region, seed, errors, length } = req.body;
    // console.log(seed)
    const users = createRandomUser(region, seed, length);
    res.send(users)
  })

  app.listen(PORT, () => {
    console.log(`SERVER IS RUNNIG on port: ${PORT}`)
  })
}
app()
// const PORT = 3030;
// const app = express();

// app.use(cors());
// app.use(express.json());

// const defaultRegion = 'UK';
// let seed;
// const customLocale = {
//   title: 'My custom locale',
// }

// function getLocaleByRegion(region) {
//   switch (region) {
//     case 'FRANCE':
//       return fr;
//     case 'SPAIN':
//       return es;
//     case 'UK':
//       return en;
//     default:
//       return en;
//   }
// }

// function createRandomUser(region, seed) {
//   const currentFaker = new Faker({
//     locale: [customLocale, getLocaleByRegion(region), base]
//   });
//   // currentFaker.seed(seed);

//   const country = currentFaker.location.country();
//   const state = currentFaker.location.city();
//   const street = currentFaker.location.street();
//   const numberBuild = currentFaker.location.buildingNumber();
//   const phone = currentFaker.phone.number();
//   const fullname = currentFaker.person.fullName();
//   const id = currentFaker.string.uuid();

//   const address = `${country}, ${state}, ${street}, ${numberBuild}`
//   return {
//     id,
//     fullname,
//     phone,
//     address
//   }
// }


// app.post('/region', (req, res) => {
//     const region = req.body.region;
//     const users =  Array.from({ length: 20 }, () => createRandomUser(region, seed));
//     res.send(users);
// })

// app.get('/users', (req, res) => {
//   const users =  Array.from({ length: 20 }, () => createRandomUser(defaultRegion, seed));
//   res.send(users);
// })

// app.post('/update', (req, res) => {
//   if (req.body.n == 0) {
//     res.send(req.body.allUsers);
//   } else {
//     const exchangeUsers = getRandomFunction(req.body.allUsers, req.body.n);
//     res.send(exchangeUsers);
//   }
// })

// app.post('/seed', async (req, res) => {
//   console.log(`${req.body.seed}`);
//   await (seed = req.body.seed);
//   res.end();
// })

// const f = () => seed
// f()
// app.listen(PORT, () => {
//   console.log(`SERVER IS RUNNIG on port: ${PORT}`)
// })







