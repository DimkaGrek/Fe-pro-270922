// Task 1
console.log("--------------- Task 1 -------------");
const userWallet = {
    amountUsa: 20,
    amountEuro: 30,
    amountUa: 1000
};
let bank = [
    {
        buy: 40.85,
        sell: 41.00,
        name: "usa"
    },
    { 
        buy: 39.05,
        sell: 39.40,
        name: "euro"
    }
];
function exchange() {
    console.log(`You have ${userWallet.amountUa} UAH in your wallet`);
    if (userWallet.amountUa <= 0) console.log("You can't buy currency");
    else {
        for (const obj of bank) {
            if (obj.name == 'usa') console.log(`You can buy $ ${(userWallet.amountUa / obj.sell).toFixed(2)}`);
            if (obj.name == 'euro') console.log(`You can buy € ${(userWallet.amountUa / obj.sell).toFixed(2)}`);
        }
    }
}
function sellCurrency() {
    let sum = 0;
    for (const obj of bank) {
        if (obj.name == 'usa') sum += userWallet.amountUsa * obj.buy;
        if (obj.name == 'euro') sum += userWallet.amountEuro * obj.buy;
    }
    console.log(`If you will sell all your currencies, you will have ${sum} UAH`);
}

exchange();
sellCurrency();

// Task 2
console.log("--------------- Task 2 -------------");
const move = (value)=>`на ${value} крокiв`;
function moveUser(dir, fn, step){
    console.log(`Юзер перемістився на ${dir} ${fn(step)}`);
}
moveUser('південь', move, 5);

// Task 3
console.log("--------------- Task 3 -------------");
let Arr = ['keep','rem1','keep','rem2','keep','rem3'];
let newArr = [];
if (Arr.length == 0) console.log("Array is empty");
else {
    for (let i=0;i<Arr.length;i++) {
        if (i % 2 == 0) newArr.push(Arr[i]);
    }
    console.log(Arr, "Arr");
    console.log(newArr, "newArr");
}


// Task 4
console.log("--------------- Task 4 -------------");
let figurs = [
    {
        figure:"circle",
        radius: 10
    },
    {
        figure:"Square",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
];
function square(arr) {
    for (const obj of arr) {
        switch (obj.figure) {
            case 'circle':
                console.log(`Area of ​​a circle with radius(${obj.radius}) = ${Math.PI * obj.radius * obj.radius}`); break;
            case 'Square': 
            case 'Rectangle':
                console.log(`Area of ${obj.figure} with sizeA ${obj.sizeA} and sizeB ${obj.sizeB} = ${obj.sizeA * obj.sizeB}`);
        }
    }
}
square(figurs);

// Task 5
console.log("--------------- Task 5 -------------");
let arrNumber = [2,3,5,4,8,7,9,10];
let newArrNumber = [];
for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i]%2 == 0) newArrNumber.push(arrNumber[i] * 4);
}
console.log(arrNumber, "arrNumber");
console.log(newArrNumber, "ArrNumber * 4");

// Task 6
console.log("--------------- Task 6 -------------");
let arrFloat = [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02];
function roundArr(arr) {
    let rArr = [];
    for (let i = 0; i < arr.length; i++) {
        rArr.push(Math.ceil(arr[i]));
    }
    return rArr;
}
console.log(arrFloat);
console.log(roundArr(arrFloat));

// Task 7
console.log("--------------- Task 7 -------------");
function randArr() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}
console.log(randArr());