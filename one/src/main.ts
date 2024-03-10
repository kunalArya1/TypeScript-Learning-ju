import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1>Hello Vite!</h1>
  </div>
`;

console.log("TypeScript Practice Session");

// First
let variableName: number;
variableName = 42;
// console.log(variableName);

// Second
let myName: String;
myName = "Kunal Kumar Arya";
// console.log(myName);

// Third
let isStudent: boolean;
isStudent = true;
// console.log(isStudent);

// Fourth

let myData: null;
myData = null;

// Fifth

let arrayName: String[];
arrayName = ["kunal", "Neha", "Jay"];
// console.log(arrayName);

// Sixth

let fruits: String[];
fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);

// Seventh

let number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// number.map((num) => console.log(num));

// Eighth

let person: {
  name: String;
  age: number;
} = { name: "kunal kumar", age: 22 };

// console.log(person);

// Ninth

let car: { make: String; year: number } = {
  make: "Audi",
  year: 2022,
};
// console.log(car);

// Tenth

let student: {
  name: String;
  age: number;
  isEnrolled: boolean;
} = { name: "Kunal", age: 22, isEnrolled: true };

// Eleventh

let personDetails: {
  name: String;
  age: number;
  hobbies: String[];
  address: {
    street: String;
    city: String;
  };
  isStudent: boolean;
  scores: number[];
  extraInfo: null;
} = {
  name: "Kunal",
  age: 22,
  hobbies: ["Coding", "Travelling", "Reading"],
  address: {
    street: "123 Main St",
    city: "Patna",
  },
  isStudent: false,
  scores: [1, 2, 3, 4, 5],
  extraInfo: null,
};

console.log(personDetails);

// twelveth

// interSection TypeScript

type persontype = { name: String; age: number };

const person2: persontype = {
  name: "Kunal",
  age: 22,
};

type student = persontype & { studentId: number };

const student1: student = {
  name: "Kunal",
  age: 22,
  studentId: 8,
};

type teacher = persontype & { subject: String };

const teacher: teacher = {
  name: "Kunal",
  age: 22,
  subject: "Maths",
};

// thirteenth

let id: string | number = 123;

// fourteenth

type studentEn = (number | string)[];

const studentEnrolled: studentEn = [1, 2, 3, 4, 5, "Kunal", "Neha", "Jay"];

let studentKunal: (number | string)[] = [1, 2, 3, 4, 5, "Kunal", "Neha", "Jay"];
// console.log(studentEnrolled);

// fifteenth

const mixedType: (string | number | boolean)[] = [
  1,
  2,
  3,
  4,
  5,
  "Kunal",
  "Neha",
  "Jay",
  true,
  false,
];

/**
 * Type Inference
 *
 *  -> it automaticallly give type to the variable based on its value assigned to that variable.
 *
 */


let nameTypeInference = 999;
console.log(nameTypeInference);
