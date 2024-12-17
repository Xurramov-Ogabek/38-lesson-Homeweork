import { sleep } from './sleep.js';
import { getRandomNumber } from './random.js';
import { Person } from './person.js';

async function main() {
  const person = new Person("Og'abek Xurramov", 2000);

  const randomMilliseconds = getRandomNumber();
  console.log(`Sleeping for ${randomMilliseconds} milliseconds...`);

  await sleep(randomMilliseconds);

  console.log(person.getInfo());
}

main();