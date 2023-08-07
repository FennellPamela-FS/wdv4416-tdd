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



const total = require('./total');

// Create a module that takes in prices in an array and returns the total

describe('Total Module Tests', () => {
    test('As a user I want to be able to get the total after submitting various prices', () => {
        expect(total([2.5, 78.12, 12.89])).toEqual(93.51)
    });
});
