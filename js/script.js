// - дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням.Повині бути команди(додавання, множення, ділення, віднімання)
let firstNumber = parseFloat(prompt('Type number', 0));
let secondNumber = parseFloat(prompt('Type number', 0));
let operationNumber = (prompt('operation'));
let result = 0;
if (operationNumber == '+') {
    result = firstNumber + secondNumber;
    console.log('plus value:', result);
}
else if( operationNumber == '-') {
    result = firstNumber - secondNumber;
    console.log('Minus operation:', result);
}
else if (operationNumber == '*') {
    result = firstNumber * secondNumber;
    console.log('Multiplie value:', result);
}
else if (operationNumber == '/') {
    result = firstNumber / secondNumber;
    console.log('Division value:', result);
    if (secondNumber === 0) {
        alert('Error');
    }
}
else {
    console.log('Operation not found');
}


// - за допомогою циклу вивести в консоль всі парні значення числа 20

for (c = 0; c <= 20; c++){
    if (c % 2 == 0) {
        console.log(c);
    }
}

// - використовуючи цикл виведіть суму чисел між  А і В з умовою що A < B
let A = 1;
let B = 9;
let res = 0;
while (A + B) {
    res = A++;
    console.log(res);
    if (A == B) {
        console.log('finish');
        break;
    }
}

// - зробити цикл який виводить дані навпаки від більшого до меншог.Наприклад від 10 до 0(10, 9, 8, 7, 6 ...)

let revers = 10;
while (revers) {
    console.log("The number is ", revers);
    revers--;
}

// - отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій довжина і ширина це отримані значення.Наприкда а = 2 і в = 2 буде ось така фігура
// **
// **

let height = prompt('Введіть значення висорти:');
let width = prompt('Введіть значення ширини:');
let widthR = ' ';
let heightR = ' ';
for (i = 0; i < width; i++) {
    widthR = widthR + '*';
}

for (y = 0; y < height; y++) {
    console.log(heightR);
    console.log(widthR);
}


// - напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"

let login = prompt('Login', 'admin');
let pasword = prompt('Pasword', 1234);
if (login == 'admin' && pasword == 1234) {
    alert('Вітаємо в системі');
}
else{
    alert('Пароль логін не вірні');
}

// - отримати 3 значення від користувача і порахувати середнє значення цих значень

// let valueA = parseInt(prompt('Введіть значення:'));
// let valueB = parseInt(prompt('Введіть значення:'));
// let valueC = parseInt(prompt('Введіть значення:'));
// let valueRes = 0;
// if (valueA >= 0 && valueB >= 0 && valueC >= 0) {
//     valueRes = (valueA + valueB + valueC) / 3;
//     console.log('Result', valueRes);
//     if (valueRes == NaN) {                       не розумію чому не працює ця умова???
//         alert('Введіть коректні значення!!!')
//     }
// }
// else {
//     alert('Не вірні значення');
// }

let valueA = parseInt(prompt('Введіть значення:'));
let valueB = parseInt(prompt('Введіть значення:'));
let valueC = parseInt(prompt('Введіть значення:'));
let valueRes = 0;
if (valueA >= 0 && valueB >= 0 && valueC >= 0) {
    valueRes = (valueA + valueB + valueC) / 3;
    console.log('Result', valueRes);
}
else {
    alert('Не вірні значення');
}

// - Спитати в користувача вік, далі використовуючи тернарний оператор(це скорочений запис іf) створити змінну яка отримує true якщо вік більше 18  i false якщо менше
let youAge = prompt('Скільки вам років ?');
let ageResult = (youAge > 18) ? true : false;
console.log(ageResult);



// - створити switch  в якому є назви планет сонячної системи.Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі.Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planet = prompt('Введіть назву планети');
switch (planet) {
    case 'Mars':
        console.log('Ця планета в сонячній систем');
        break;
    case 'Jupiter':
        console.log('Ця планета в сонячній систем');
        break;
    case 'Earth':
        console.log('Ця планета в сонячній систем');
        break;
    case 'Venus':
        console.log('Ця планета в сонячній систем');
        break;
    case 'Saturn':
        console.log('Ця планета в сонячній систем');
        break;

    default:
        console.log('Такої планети нема в сонячній системі');
        break;
}



// - Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3 % і вивести значення якщо більше 3000 то порахувати знижку 5 % і якщо більше 10000 то порахувати знижку 7 % в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"


let cena = prompt('Вкажіть ціну товару:');
let cenaRes;
let discount;
if (cena > 0 && cena <= 100) {
    console.log('До сплати:', cena);
}
else if (cena > 100 && cena <= 3000) {
    discount = cena / 100 * 3;
    cenaRes = cena - discount;
    console.log('Ваша знижка становить:', discount.toFixed(2), 'До сплати:', cenaRes.toFixed(2));
}
else if (cena > 3000 && cena <= 10000) {
    discount = cena / 100 * 5;
    cenaRes = cena - discount;
    console.log('Ваша знижка становить:', discount.toFixed(2), 'До сплати:', cenaRes.toFixed(2));
}
else if (cena > 10000) {
    discount = cena / 100 * 7;
    cenaRes = cena - discount;
    console.log('Ваша знижка становить:', discount.toFixed(2), 'До сплати:', cenaRes.toFixed(2));
}
else {
    console.log('У вас нема знижки до сплати:', cena);
}


// - отримати від користувача назву трарини і за допогомою світч вивести звук який вона видає.Наприклад корова: му - му  і т.д

let animal = prompt('Введіть назву тварини:');
switch (animal) {
    case 'корова':
        console.log('му-му');
        break;
    case 'кіт':
        console.log('мяу-мяу');
        break;
    case 'собака':
        console.log('гав-гав');
        break;
    case 'качка':
        console.log('кря-кря');
        break;
    case 'півень':
        console.log('ку-ку-рі-ку');
        break;

    default:
        console.log('Не вірна назва');
        break;
}