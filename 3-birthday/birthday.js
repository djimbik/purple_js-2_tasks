// HM - 3

const validateAge = (birthday, criticalAgeLimit) => {
    const birthdayDate = new Date(birthday);
    const today = new Date();

    let ageDifference = today.getFullYear() - birthdayDate.getFullYear();
    const monthDifference = today.getMonth() - birthdayDate.getMonth();
    const dayDifference = today.getDate() - birthdayDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        ageDifference--;
    }

    return ageDifference >= criticalAgeLimit;
}

console.log(validateAge('2013-01-01', 14)); // false
console.log(validateAge('2003-01-01', 14)); // true