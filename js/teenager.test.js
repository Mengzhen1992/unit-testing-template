import { checkTeenagerStatus } from "./teenager.js";
import { test } from "@jest/globals";;

const testData = [
  [12, false],
  [13, true],
  [19, true],
  [20, false],
  [70, false],
];

test.each(testData)("returns correct teenager status", (age, expectedValue) => {
  const teenagerStatus = checkTeenagerStatus(age);
  expect(teenagerStatus).toBe(expectedValue);
});
