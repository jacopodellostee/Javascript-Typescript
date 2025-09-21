/**
 * @file helper.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Provides credit card validation utilities:
 * - Validate a single card.
 * - Validate multiple cards in parallel.
 * - Pretty-print results in a boxed format.
 */

const creditCardUtils = {
  /**
   * Validation rules constants.
   * @readonly
   * @enum {number}
   */
  VALIDATION_RULES: {
    REQUIRED_LENGTH: 16,
    MIN_SUM: 16,
    MIN_UNIQUE_DIGITS: 2
  },

  /**
   * Human-readable error messages.
   * @readonly
   * @enum {string}
   */
  ERROR_MESSAGES: {
    invalid_characters: "invalid characters",
    final_digit_not_even: "odd final number",
    sum_not_greater_16: "sum less than 16",
    only_one_digit: "only one type of number",
    wrong_length: "wrong length"
  },

  /**
   * Validates a credit card number based on predefined rules.
   *
   * @async
   * @param {string} [creditCard=""] - The credit card number to validate (dashes allowed).
   * @returns {Promise<Object>} Validation result object.
   */
  validateCreditCard: async (creditCard = "") => {
    const normalizedCard = creditCard?.replace(/-/g, "") ?? "";
    const { REQUIRED_LENGTH, MIN_SUM, MIN_UNIQUE_DIGITS } =
      creditCardUtils.VALIDATION_RULES;

    let result = {
      valid: true,
      number: creditCard
    };

    try {
      const isValidFormat = /^\d{16}$/gm.test(normalizedCard);

      if (!isValidFormat) {
        const error =
          normalizedCard.length !== REQUIRED_LENGTH
            ? "wrong_length"
            : "invalid_characters";

        return { ...result, valid: false, error };
      }

      const digits = [...normalizedCard].map((digit) => parseInt(digit, 10));

      const lastDigit = digits?.[digits.length - 1] ?? 0;
      if (lastDigit % 2 !== 0) {
        return { ...result, valid: false, error: "final_digit_not_even" };
      }

      const sum = digits.reduce((acc, digit) => acc + digit, 0);
      if (sum <= MIN_SUM) {
        return { ...result, valid: false, error: "sum_not_greater_16" };
      }

      const uniqueDigits = new Set(digits);
      if (uniqueDigits.size < MIN_UNIQUE_DIGITS) {
        return { ...result, valid: false, error: "only_one_digit" };
      }

      return result;
    } catch (error) {
      return {
        ...result,
        valid: false,
        error: "validation_error",
        details: error?.message ?? "Unknown error"
      };
    }
  },

  /**
   * Prints the validation result in a formatted box style.
   *
   * @param {Object} [result={}] - Validation result object.
   * @param {Object} [options={}] - Printing options.
   * @returns {void}
   */
  printResult: (
    { valid, number, error, details } = {},
    { borderChar = "=", width = 32 } = {}
  ) => {
    const border = borderChar.repeat(width);

    const formatLine = (label, value) => {
      const content = `${label} : ${value}`;
      const padding = width - content.length - 4;
      return `${borderChar} ${content}${" ".repeat(
        Math.max(0, padding)
      )} ${borderChar}`;
    };

    console.log(border);
    console.log(formatLine("number", number ?? "N/A"));
    console.log(formatLine("valid", valid ?? false));

    if (!valid && error) {
      const errorMessage = creditCardUtils.ERROR_MESSAGES[error] ?? error;
      console.log(formatLine("error", errorMessage));
    }

    if (details) {
      console.log(formatLine("details", details));
    }

    console.log(border);
  },

  /**
   * Validates multiple credit cards asynchronously in parallel.
   *
   * @async
   * @param {string[]} [creditCards=[]] - Array of credit card numbers.
   * @returns {Promise<Object[]>} Array of validation results.
   */
  validateMultipleCards: async (creditCards = []) => {
    const validations = creditCards.map((card) =>
      creditCardUtils.validateCreditCard(card)
    );
    return await Promise.all(validations);
  }
};

export default creditCardUtils;
