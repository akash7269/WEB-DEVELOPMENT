import {firstName} from './utils/fname.js'
import {age} from './utils/age.js'
import { Person } from './person.js'


console.log(firstName, age);
const person = new Person("AkAsH", "DiNdA", 23);
console.log(person);
person.info();