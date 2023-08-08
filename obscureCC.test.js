// Requirements
// TDD - create test for a module that will:
// obscure credit card number except the last 4 digits
// Test to make sure the function obscures credit card numbers that are between the length of 12 and 16 digits

// Note: check to make sure all digits are between 12-16 if not return invalid, other wise return the obscured cc numbers. Such as 
// ************9087
// positive test return obscured cc
// negative test return invalid
// input: 123456789012
// output: ●●●●●●●●●●●9012

const obscureCC = require('./obscureCC');

// Create a module that takes a cc Number and obscures all digits if valid excluding the last 4 digits.
describe("Obscure Credit Card Number", () => {
    test("As a user I want to be able to obscure a valid credit card number", () => {
        const input = "123456789012";
        const dots = "●".repeat(input.length - 4);
        const output = `${dots}${input.slice(-4)}`

        expect(obscureCC(input)).toBe(output)

        expect(obscureCC("12345678901")).toBe("Invalid Credit Card")

        expect(obscureCC("12345678901234567")).toBe("Invalid Credit Card")

        expect(obscureCC("1234567890123456")).toEqual("●●●●●●●●●●●●3456")

        expect(obscureCC("123456789012")).toEqual("●●●●●●●●9012")

    })

    test("Throw an error if the input is not a number", () => {
        expect(() => obscureCC(NaN).toThrow("Invalid."))
    })

    test("Throw an error if the input is non-numeric", () => {
        expect(() => obscureCC("1234abcd0123efgh").toThrow("Invalid Credit Card"))
        expect(() => obscureCC("1234abcd0123").toThrow("Invalid Credit Card"))
    });
})