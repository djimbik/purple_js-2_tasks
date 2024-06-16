// HM - 2

const DICE_TYPES = {
    'd4': 4,
    'd6': 6,
    'd8': 8,
    'd10': 10,
    'd12': 12,
    'd16': 16,
    'd20': 20,
}

const generateRandomNum = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

const generateRandomDice = (diceType) => {
    const max = DICE_TYPES[diceType];
    if (!max) {
        return ('Неверный тип кубика');
    }
    return generateRandomNum(max);
}

const testGenerateRandomDice = (diceType, numTests) => {
    let testFailed = false;

    for (let i = 0; i < numTests; i++) {
        const res = generateRandomDice(diceType)
        if (res > DICE_TYPES[diceType] || res < 1) {
            testFailed = true;
        }
    }

    return testFailed ? 'Test failed' : 'All right';
}

console.log(testGenerateRandomDice('d4', 1000));
console.log(testGenerateRandomDice('d6', 1000));
console.log(testGenerateRandomDice('d8', 1000));
console.log(testGenerateRandomDice('d10', 1000));
console.log(testGenerateRandomDice('d12', 1000));
console.log(testGenerateRandomDice('d16', 1000));
console.log(testGenerateRandomDice('d20', 1000));