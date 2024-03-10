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

