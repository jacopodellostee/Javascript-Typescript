/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Entry point for the credit card validator application. 
 * Demonstrates validation of a set of test card numbers
 * using the helper module.
 */

import creditCardUtils from "./helper.js";

async function main() {
  const testCards = [
    "9999-9999-8888-0000",
    "9169-9239-4458-9712",
    "a923-3211-9c01-1112",
    "6666-6666-6666-6661",
    "1111-1111-1111-1110",
    "4444-4444-4444-4444",
    "6666-6666-6666-1666"
  ];

  try {
    const results = await creditCardUtils.validateMultipleCards(testCards);
    results.forEach((result) => {
      creditCardUtils.printResult(result);
    });
  } catch (error) {
    console.error(
      "Validation failed:",
      error?.message ?? "Unknown error"
    );
  }
}

main();
