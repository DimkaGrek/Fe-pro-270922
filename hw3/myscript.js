const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
let arrOddNumber = [];
// Task 1
function getEvenNumber(arr) {
    let arrEvenNumber = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 == 0) arrEvenNumber.push(arr[i]);
    }
    return arrEvenNumber;
}

console.log(getEvenNumber(arrRandomNumbers));

// Task 2
function getOddNumberSort(arr){
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 != 0) arrOddNumber.push(arr[i]);
    }
    arrOddNumber.sort((a,b) => a - b);
}
getOddNumberSort(arrRandomNumbers);
console.log(arrOddNumber);

// Task 3
function getDoubleArr(arr) {
    let doubleArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubleArr.push(arr[i]*2);        
    }
    return doubleArr;
}
console.log(getDoubleArr(arrRandomNumbers));

// Task 4
function Add(a,b){
    return a+b;
}
function Sub(a,b) {
    return a-b;
}
function Mult(a,b){
    return a*b;
}
function Div(a,b) {
    if (b == 0) {
        alert("Devision by zero!");
        return undefined;
    }
    else return a/b;
}
let exit = true;
while (exit) {
    let a = parseInt(prompt("Input first number"));
    let b = parseInt(prompt("Input second number"));
    let oper = prompt("Input opertion (+,-,*,/,exit");
    switch (oper) {
        case "+": console.log(Add(a,b)); break;
        case "-": console.log(Sub(a,b)); break;
        case "*": console.log(Mult(a,b)); break;
        case "/": console.log(Div(a,b)); break;
        case "exit": exit = false; break;
        default: console.log("Unknown operation")
    }
}

// Task 5
const boolArr = ['aaa', true, 'ccc', false, 'false'];
function delBoolean(arr){
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'boolean') arr.splice(i, 1);
    }
    return arr;
}
console.log(boolArr, "boolArr");
console.log(delBoolean(boolArr));

// Task 6
const smile = [':)', '=)',':)', '=)',':)', '=)'];
function replacement(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '=)') arr[i]=';)';
    }
    return arr;
}
console.log(replacement(smile));

// Task 7
const animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
const newArr = [];
function firstLast(arg){
    if (arg == 'first') {
        newArr.push(animals.shift());
        document.writeln(animals, '<br>');
    }
    if (arg == 'last') {
        newArr.push(animals.pop());
        document.writeln(animals, '<br>');
    }
}
while(animals.length > 0) {
    firstLast(prompt('Input argument(first or last)'));
}
console.log(newArr);