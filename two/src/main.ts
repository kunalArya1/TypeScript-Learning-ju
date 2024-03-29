import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h3> TypeScript Function Practice </h3>
  </div>
`;

// console.log("TypeScript Function Practice");

// first

function greet(name: string): void {
  console.log(`Hello ${name}`);
}
// greet("Kunal Arya");

// second

function addNumbers(a: number, b: number): void {
  console.log(a + b);
}

// addNumbers(10, 40);

// third

function calculateVolume(
  length: number,
  width: number,
  height: number
): number {
  return length * width * height;
}

// console.log(calculateVolume(10,30,40));

// fourth

function printInfo(info: number | string): void {
  console.log(info);
}

type InfoType = number | string;

function printInfo2(info: InfoType): void {
  console.log(info);
}

// printInfo2("Chahca2");

// fifth

type Circle = {
  kind: "circle";
  radious: number;
};

type Reactangle = {
  kind: "rectangle";
  lenght: number;
  width: number;
};

type Shape = Circle | Reactangle;

function getArea(Shape: Shape): number {
  if (Shape.kind === "circle") {
    return Math.PI * Shape.radious ** 2;
  } else {
    return Shape.lenght * Shape.width;
  }
}

// console.log(getArea({ kind: "circle", radious: 10 }));

// sixth

type Person = { name: string; age: number };
type student = Person & { studetnId: number };

function convertPersonToStudent(person: Person): student {
  return { ...person, studetnId: 1 };
}

// console.log(convertPersonToStudent({ name: "kunal", age: 22 }));

// seventh

function doubleNumber(num: number[]): number[] {
  return num.map((n) => n * 2);
}

// console.log(doubleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Interfaces in TypeScript

/**
 *
 *
 */

interface Person2 {
  name: string;
  age: number;
}

const person: Person = {
  name: "kunal",
  age: 22,
};

// console.log(person);

// second

interface car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
  features: string[];
}

const car1: car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  isElectric: false,
  features: ["Airbags", "ABS", "Power Steering"],
};

// console.log(car1);

// third

interface Person3 {
  name: string;
  age: number;
}

function displayPerson(person: Person3): void {
  console.log(` Name: ${person.name} and Age: ${person.age}`);
}

// displayPerson({ name: "Kunal", age: 22 });

// fourth

interface Mathfunction {
  (a: number, b: number): number;
}

const add: Mathfunction = (a, b) => a + b;

// console.log(add(10, 20));

// fifth

interface DoubleNumer4 {
  (num: number): number;
}

const doubleNumber2: DoubleNumer4 = (num) => num * 2;

// console.log(doubleNumber2(10));

interface squareNumber {
  (num: number): number;
}

const squareNumber2: squareNumber = (num) => num * num;

// console.log(squareNumber2(8));

/**
 *
 *    Generic Statred
 */

// first

function identity<T>(arg: T): T {
  return arg;
}

// console.log(identity<number>(10));

function findItem<T>(arr: T[]) {
  if (arr.length === 0) {
    return -1;
  } else {
    return arr[0];
  }
}

// console.log(findItem([11, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

findItem<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function checkPresence<T>(arr: T[], item: T) {
  return arr.includes(item);
}

// console.log(checkPresence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

// second

interface Book {
  title: string;
  author: string;
  year: string;
  genre?: string;
}

const book1: Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: "1988",
  genre: "Fiction",
};
const book2: Book = {
  title: "The Secret",
  author: "Rhonda Byrne",
  year: "2006",
};

// console.log(book1, book2);

// third

type quizQuestion = {
  question: string;
  options: string[];
  correctOptions: number;
};

const questions: quizQuestion[] = [
  {
    question: " what is react ?",
    options: ["Library", "Framework", "Language", "Platform"],
    correctOptions: 1,
  },
  {
    question: " what is angular ?",
    options: ["Library", "Framework", "Language", "Platform"],
    correctOptions: 1,
  },
];

// console.log(questions);

function quizChecker(question: quizQuestion, userAnswer: number): boolean {
  return question.correctOptions === userAnswer;
}
// console.log(quizChecker(questions[0], 1));

type quizChecker = (quizQuestion: quizQuestion, userAnswer: number) => boolean;

const checkQuizAnswer: quizChecker = (quizQuestion, userAnswer) => {
  return quizQuestion.correctOptions === userAnswer;
};

// console.log(checkQuizAnswer(questions[0], 1));

// fourth

type filterFunction<T> = (array: T[], predicate: (item: T) => boolean) => T[];

const filterArray: filterFunction<number> = (array, isEven) => {
  return array.filter(isEven);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = (num: number) => num % 2 === 0;

// console.log(filterArray (array, isEven));

// fifth

type mapFunction<T> = (array: T[], callback: (item: T) => string) => string[];

const doubleToString: mapFunction<number> = (array, callback) => {
  return array.map(callback);
};

// Another way
type mapFunction2<T, R> = (array: T[], callback: (item: T) => R) => R[];

const doubleToString2: mapFunction2<number, string> = (array, callback) => {
  return array.map(callback);
};

const covertToString = (num: number) => num.toString();
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(doubleToString(array, covertToString));
// console.log(doubleToString2(array, covertToString));



// sixth 


type reduceFuction < T > = (array: T[], reducecer: (acc: number, num: number) => T) => T;


const sumAccumlator: reduceFuction<number> = (acc, reducer) => {
  return ;
};

const numbers = [1,2,3,4,5,6,7,8,9,10];
const reducer = (acc: number,num: number) => acc+num;