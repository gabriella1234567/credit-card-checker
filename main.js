// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// A function that takes in an array of numbers and returns true if the numbers are valid
const getCheckDigit = arr => {

    // Reverse arr to iterate "backwards"
    arr = arr.toReversed();

    // Declare empty variable to store sum
    let sum = 0;

    /* For loop to iterate through arr. By declaring i = 1, the loop will start at index 1, skipping the first digit. It continues throughout the entire length of the array (i < arr.length) and skips every other digit by incrementing i by 2.
    */
    for (let i = 1; i < arr.length; i += 2) {
        // Doubles the digit at index [i]
        arr[i] *= 2;
        // If arr at index [i] is greater than 9, subtract 9
        if (arr[i] > 9) {
            arr[i] -= 9;
        } 
    }

    /* Adds all the digits in arr together by using reduce, where a is the accumulator and b is the current value of arr. The accumulator starts at 0 and adds b to it. It then returns a boolean by returning the result itself, it returns true if the sum is divisible by 10, otherwise it returns false.
    */
    sum = arr.reduce((a, b) => a + b, 0);
    return sum % 10 === 0;
}

// A function that returns a nested array of invalid number arrays
const findInvalidCards = arr => {
    // Declare empty array to store invalid card numbers
    let invalidCards = [];
    // Start for loop that loops through an array of arrays, using card as the current value.
    for (const card of arr) {
        // Checks if getCheckDigit is false, meaning the card number is invalid, and pushes it to the invalidCards array
        if (!getCheckDigit(card)) {
            invalidCards.push(card);
        }
        // Returns the array of invalid cards
    } return invalidCards;
}

// A function that takes in an array of invalid card numbers and returns an array of the companies that issued them
const idInvalidCardCompanies = arr => {
    // Declare empty array to store invalid companies
    let invalidCompanies = [];
    // Checks if any cards in the array start with the associated digit by checking card[0]. If there's a match, it pushes the company name to the invalidCompanies array
    if (arr.some(card => card[0] === 3)) {
        invalidCompanies.push('American Express');
    } else if (arr.some(card => card[0] === 4)) {
        invalidCompanies.push('Visa');
    } else if (arr.some(card => card[0] === 5)) {
        invalidCompanies.push('Mastercard');
    } else if (arr.some(card => card[0] === 6)) {
        invalidCompanies.push('Discover');
    } else {
        console.log('Company not found');
    }
    // Returns the array of invalid companies
    return invalidCompanies;
}

// Simple function that takes a string (card) and returns the string as an array of numbers
const cardNumberToString = card => {
    return card.split('')
}


// Tests
console.log(getCheckDigit(valid1)); // test valid card
console.log(getCheckDigit(invalid1)); // test invalid card
console.log(findInvalidCards(batch)); // test finding invalid cards
console.log(idInvalidCardCompanies(findInvalidCards(batch))); // test getting companies
