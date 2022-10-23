// // Task 1
function sum(...arg) {
    let sum = 0;
    for (let i of arg) {
        sum+=i;
    }
    return sum;
}
console.log(sum(2,3,4,6,2,4324,232,434));

// // Task 2
function birthdayYear() {
    let result = "";
    const birth = new Date(prompt('Input you birthday(mm/dd/yyyy)'));
    if (isNaN(birth)) return "Invalid date";
    const today = new Date();
    result = birth.getFullYear() + " year";
    if (birth.getDate() == today.getDate() && birth.getMonth() == today.getMonth()) {
        result = result + " Happy birthday!!!";
    }
    return result;
}
console.log(birthdayYear());

// Task 3
const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false']];
function getBoolean(arr) {
    let result = [];
    for (let i of arr) {
        if (typeof i === 'boolean') result.push(i);
    }
    return result;
}
console.log(getBoolean(sort));

// Task 4
function getCentury(year) {
    if (typeof year === 'number' && year > 0) {
        return 1 + Math.trunc(year / 100) + " century"; 
    }
    return "Invalid year";
}
console.log(getCentury(1999));

// Task 5
function daysInMonth() {
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];
    let today = new Date();
    let month = today.getMonth();
    let days;
    let nextdays;
    if ((today.getFullYear() % 4 == 0 || today.getFullYear() % 400 == 0)) { // if leap year
        if (month == 1) {
            days = months[month] + 1;
            nextdays = months[month + 1];
        }
        else if (month == 0) {
            days = months[month];
            nextdays = months[month + 1] + 1;
        }
        else {
            days = months[month];
            nextdays = months[month + 1];
        }
    }
    else {
        days = months[month];
        nextdays = months[month + 1];
    }
    return `In this month are ${days} days, in next month are ${nextdays}`;
}
console.log(daysInMonth());