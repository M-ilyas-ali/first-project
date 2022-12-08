#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
import figlet from "figlet";
type Data_types = {
  value: string;
  value2: string;
  operation: "+" | "-" | "/" | "*" | "%";
};
const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));
async function First_machine() {
  console.log(chalk.red(figlet.textSync("CALCULATOR")));
  const Welcome_message = chalkAnimation.rainbow("LETS CALCULATE YOUR VALUES");
  await sleep();
  Welcome_message.stop();
  const First_Prompt: Data_types = await inquirer.prompt([
    {
      name: "value",
      type: "number",
      message: "Enter First Value",
      validate: (number) => {
        if (isNaN(number)) {
          return "Not  A Number";
        } else {
          return true;
        }
      },
    },
    {
      name: "operation",
      type: "list",
      message: "Enter Mathematical Operation Symbol",
      choices: ["+", "-", "*", "/", "%"],
    },
    {
      name: "value2",
      type: "number",
      message: "Enter Second Number",
      validate: (number) => {
        if (isNaN(number)) {
          return "Not  A Number";
        } else {
          return true;
        }
      },
    },
  ]);
  const First_Number = Number(First_Prompt.value);
  const Second_Number = Number(First_Prompt.value2);
  switch (First_Prompt.operation) {
    case "+":
      console.log(First_Number + Second_Number);
      break;
    case "-":
      console.log(First_Number - Second_Number);
      break;
    case "*":
      console.log(First_Number * Second_Number);
      break;
    case "/":
      console.log(First_Number / Second_Number);
      break;
    case "%":
      console.log(First_Number % Second_Number);
      break;
    default:
      "something wrong";
      break;
  }
}

First_machine();
