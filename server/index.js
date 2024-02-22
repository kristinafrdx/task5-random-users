import express from 'express';
import { faker } from '@faker-js/faker';
import cors from 'cors';
import { base, es, fr, en_GB, Faker, en } from '@faker-js/faker';
import { getRandomFunction } from './errors/helpFunction.js';

const PORT = 3030;
const app = express();

app.use(cors());
app.use(express.json());

const defaultRegion = 'UK';
// let seed;
const customLocale = {
  title: 'My custom locale',
}
// let reg;
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

const currentFaker = new Faker({
  locale: [customLocale, en, en_GB, es, fr, base]
});

function createRandomUser() {
  // currentFaker.seed(seed);
  const country = currentFaker.location.country();
  const state = currentFaker.location.city();
  const street = currentFaker.location.street();
  const numberBuild = currentFaker.location.buildingNumber();
  const phone = currentFaker.phone.number();
  const fullname = currentFaker.person.fullName();
  const id = currentFaker.string.uuid();

  const address = `${country}, ${state}, ${street}, ${numberBuild}`
  return {
    id,
    fullname,
    phone,
    address
  }
}
const getFirstTwentyUsers = Array.from({length: 20}, () => createRandomUser())
const getNextTenUsers = Array.from({length: 10}, () => createRandomUser())
// app.post('/region', (req, res) => {
//     const region = req.body.region;
//     reg = region;
//     console.log(reg || defaultRegion)
//     const users =  Array.from({ length: 20 }, () => createRandomUser(region, seed));
//     res.send(users);
// })

// app.get('/users', (req, res) => {
//   const users =  Array.from({ length: 20 }, () => createRandomUser(defaultRegion, seed));
//   res.send(users);
// })

app.post('/users', (req, res) => {
  const { selectedRegion, inputValue, seedValue } = req.body;
  if (inputValue === 0) {

  }
  const exchangeUsers = getRandomFunction();
})
// app.post('/update', (req, res) => {
//   if (req.body.n == 0) {
//     res.send(req.body.allUsers);
//   } else {
//     const exchangeUsers = getRandomFunction(req.body.allUsers, req.body.n);
//     res.send(exchangeUsers);
//   }
// })

// app.post('/seed', async (req, res) => {
//   // console.log(`${req.body.seed}`);
//   await (seed = req.body.seed);
//   res.end();
// })

// const f = () => seed
// const r = () => reg
// f()
// r()

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNIG on port: ${PORT}`)
})







