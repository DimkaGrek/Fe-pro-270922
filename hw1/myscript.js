let firstValue = parseInt(prompt("Input first number"));
let secondValue = parseInt(prompt("Input second number"));
console.log(firstValue + '+' + secondValue + ' =' , firstValue+secondValue);
console.log(firstValue + '-' + secondValue + ' =' , firstValue-secondValue);
console.log(firstValue + '*' + secondValue + ' =' , firstValue*secondValue);
console.log(firstValue + '/' + secondValue + ' =' , firstValue/secondValue);

let firstVar = prompt("Input User name");
let secondVar = prompt("Input User last name");
document.writeln("User name: ", firstVar);
document.writeln("User last name: ", secondVar);

let lang = prompt("Input lang('uk' or 'ru')");
console.log(lang == 'uk');