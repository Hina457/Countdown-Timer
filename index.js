#!/usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
console.log(chalk.red("+".repeat(40)));
console.log(chalk.green("Wellcome to Hina Alvi Countdown Timer"));
console.log(chalk.red("+".repeat(40)));
const second = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Enter amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please";
        }
        else if (input > 60) {
            return "Second must within 60";
        }
        else {
            return true;
        }
    }
});
let input = second.userInput;
function startTime(val) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log('Time has Expired');
            console.log(chalk.red("+".repeat(10)));
            console.log('Thank you!');
            console.log(chalk.red("+".repeat(10)));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}}`);
        console.log(chalk.white("-".repeat(10)));
    }, 1000);
}
startTime(input);
