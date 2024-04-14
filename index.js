#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let currencyConvertor = {
    "USD": {
        "USD": 1,
        "EUR": 0.94,
        "PKR": 273.30,
        "GBP": 0.80,
        "JPY": 153.28,
        "KWD": 0.31,
        "INR": 83.61,
    },
    "EUR": {
        "USD": 1,
        "EUR": 0.94,
        "PKR": 273.30,
        "GBP": 0.80,
        "JPY": 153.28,
        "KWD": 0.31,
        "INR": 83.61,
    }, "PKR": {
        "USD": 0.0036,
        "EUR": 0.0034,
        "PKR": 1,
        "GBP": 0.0029,
        "JPY": 0.55,
        "KWD": 0.0011,
        "INR": 0.30,
    },
    "GBP": {
        "USD": 1.25,
        "EUR": 0.0034,
        "PKR": 1.17,
        "GBP": 1,
        "JPY": 191.58,
        "KWD": 0.38,
        "INR": 104.15,
    },
    "JPY": {
        "USD": 0.0065,
        "EUR": 0.0061,
        "PKR": 1.81,
        "GBP": 0.0052,
        "JPY": 1,
        "KWD": 0.0020,
        "INR": 104.15,
    },
    "KWD": {
        "USD": 3.26,
        "EUR": 3.06,
        "PKR": 904.14,
        "GBP": 2.62,
        "JPY": 499.75,
        "KWD": 1,
        "INR": 272.61,
    },
    "INR": {
        "USD": 0.012,
        "EUR": 0.011,
        "PKR": 3.32,
        "GBP": 0.0096,
        "JPY": 1.84,
        "KWD": 0.0037,
        "INR": 1,
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Please Select the currency",
        choices: ["USD", "EUR", "PKR", "GBP", "JPY", "KWD", "INR"]
    }, {
        type: "list",
        name: "to",
        message: "Please Select the currency",
        choices: ["USD", "EUR", "PKR", "GBP", "JPY", "KWD", "INR"]
    },
    {
        type: "number",
        name: "amount",
        message: "Please Enter the amount"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = currencyConvertor[from][to] * amount;
    console.log(chalk.green(`Your money of ${amount} ${from} converts to ${result.toFixed(2)} ${to}`));
}
else {
    console.log(chalk.red("Invalid currency or amount provided."));
}
