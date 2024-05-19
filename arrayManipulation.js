function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num * num : num * 3));
}

//example for task 1
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);

function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("Arrays must be of the same length");
    }

    return strings.map((str, index) => 
        (numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase())
    );
}

//example for task 2
const strings = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3];

const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings);

module.exports = { processArray, formatArrayStrings };
