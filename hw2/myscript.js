// Task Calculator
let firstValue = parseInt(prompt("Input first number"));
let secondValue = parseInt(prompt("Input second number"));
console.log(firstValue + '+' + secondValue + ' =' , firstValue+secondValue);
console.log(firstValue + '-' + secondValue + ' =' , firstValue-secondValue);
console.log(firstValue + '*' + secondValue + ' =' , firstValue*secondValue);
if (secondValue == 0) alert("Division by zero!");
else console.log(`${firstValue}/${secondValue} =` , firstValue/secondValue);

// Task Weekdays
let arrayWeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i=0; i < arrayWeekDays.length; i++) {
    if (arrayWeekDays[i] == 'Tuesday' || arrayWeekDays[i] == 'Thursday') alert(`Today is ${arrayWeekDays[i]}. You have a lesson at 19:00`);
}

// Task discount
let discount = 10;
let count = parseInt(prompt("Input count of products"));
let totalPrice = parseInt(prompt("Input total price of products"));
let price = count>=5 ? totalPrice - totalPrice * (discount/100): totalPrice;
console.log(`Total price = ${price}`);

// Task Sum of numbers
let a = parseInt(prompt("Input first number"));
let b = parseInt(prompt("Input second number"));
let sum = 0;
let i = a;
if (a < b) {
    for (i;i<=b;i++) {
        sum+=i;
    }
    document.writeln(`Sum of numbers between ${a} and ${b} = ${sum} <br>`);
}
else alert('First number must be less than second number!');

// Task login/password
let login = prompt('Input login');
let pass = prompt('Input password');
if (login == 'admin' && pass == '12345') document.writeln('Welcome to the system! <br>');
else document.writeln('login and/or password is not correct! <br>');