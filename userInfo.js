const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, numbers) {
    const processedNumbers = processArray(numbers);
    const formattedNames = formatArrayStrings(names, processedNumbers);

    return names.map((name, index) => ({
        originalName: name,
        modifiedName: formattedNames[index],
        id: index + 1
    }));
}

// Example for task 3
const names = ["Adwoa", "Esinam", "Harriet"];
const numbers = [1, 2, 3];
const profiles = createUserProfiles(names, numbers);
console.log(profiles);
