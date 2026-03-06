#!/usr/bin/env node
const { calculate } = require("./calculator");

function printUsage() {
  console.log("Usage: node src/index.js <operation> <number1> <number2>");
  console.log("Operations: + (add), - (subtract), * (multiply), / (divide)");
}

function parseNumber(value, label) {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    throw new Error(`Invalid ${label}: "${value}" is not a number.`);
  }

  return parsed;
}

function run() {
  const [operation, leftInput, rightInput] = process.argv.slice(2);

  if (!operation || !leftInput || !rightInput) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  try {
    const left = parseNumber(leftInput, "first value");
    const right = parseNumber(rightInput, "second value");
    const result = calculate(operation, left, right);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

run();
