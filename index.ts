#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },

  {
    message: "select one operator to perform operatiion",
    type: "list",
    name: "operators",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Divided",
      "Exponentiation",
      "Modulus",
      "Percentage",
    ],
  },
]);

if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Divided") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operators === "Exponentiation") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else if (answer.operators === "Modulus") {
  console.log("Reaminder is :", answer.firstNumber % answer.secondNumber);
} else if (answer.operators === "Percentage") {
  console.log((answer.firstNumber / answer.secondNumber) * 100, "%");
} else {
  console.log("Please select valid operator");
}
