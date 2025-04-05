// Phone: id, brand, model, releaseYear, color, isNfc, price

function Phone (id, brand, model, releaseYear, color, isNfc, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
    this.color = color;
    this.isNfc = isNfc;
    this.price = price;
}

// const phone = new Phone(1, 'Samsung', 'Galaxy 1', 2020, 'blue', true, 10000);


// створюємо масив в який будем складати нагенеровані випадковим чином дані щоб потім створити з них обєкти через функцію конструктор
const phones = [];

//задаємо заагльну кількість телефонів в нашій уявній базі даних (в масиві)
const PHONES_COUNT = 100;

// за допомогою циклу нагенеруємо базу телефонів з рандомними даними
for (let i = 0; i < PHONES_COUNT; i++) {
    const phone = new Phone(
        i,
        Math.random() > 0.5 ? 'Samsung' : 'Iphone',
         `Series ${Math.trunc(Math.random() * 20)}`,
         2015 + Math.trunc(Math.random() * 8),
        Math.random() > 0.5 ? 'white' : 'black',
        Math.random() > 0.5,                          // true or false, просто умова
         5000 + Math.trunc(Math.random() * 7000)
        );

        // додаємо кожен згенерований телефон до масиву 
    phones.push(phone);
}

// console.log(phones);
// console.table(phones); // console.table - зручний для перегляду маисивів в консолі. Він виводить дані масиву у вигляд таблиці!

// 1. Відібрати телефони дорожче 8000 грн

// function isGreater8000 (item, index, array) {   // це фунцкія колбек. В даному випадку нам не знадобились параметри index i array -  тому можемо їх прибрати
//    return item.price > 8000;
// }

// const phones8000 = phones.filter(isGreater8000);  // створили змінну, в якій збережеться масив з відфільтрованими даними початкового масиву. Тобто кожен обєкт phone в масиві Phones  який який відповідає умові фунцкії колюек isGreater8000 (має ціну більше ніж 8000) 
// console.table(phones8000);

// більш оптимізований спосіб, оскільки наша колбек функція має тільки return в тілі

// const isGreater8000 = item => item.price > 8000;

// const phones8000 = phones.filter(isGreater8000);  // створили змінну, в якій збережеться масив з відфільтрованими даними початкового масиву. Тобто кожен обєкт phone в масиві Phones  який який відповідає умові фунцкії колюек isGreater8000 (має ціну більше ніж 8000) 
// console.table(phones8000);

// найбільш оптимізований спосіб і найчастіше використовуваний для стрілкових функції

// const phones8000 = phones.filter(item => item.price > 8000);  // створили змінну, в якій збережеться масив з відфільтрованими даними початкового масиву. Тобто кожен обєкт phone в масиві Phones  який який відповідає умові фунцкії колюек item => item.price > 8000 (має ціну більше ніж 8000) 
// console.table(phones8000);




// 2. Відібрати телефони 2018року випуску

// const phonesYear2018 = phones.filter(item => item.releaseYear === 2018);  // створили змінну, в якій збережеться масив з відфільтрованими даними початкового масиву. Тобто кожен обєкт phone в масиві Phones  який який відповідає умові фунцкії колюек item => item.releaseYear === 2018 (має рік випуску більше ніж 2018) 
// console.table(phonesYear2018);

// 3.  Вивести телефони з ціною від 6000 до 9000




// 3. Вивести 'brand: model year' кожного телефону (forEach)


// phones.forEach(p => console.log(`${p.brand}: ${p.model} ${p.releaseYear}`));  // тут p = item - перша буква від імені масиву, це єдиний випадок де такі назви доречні і широко використовуються



// 4. Видалити телефон з id 10 (findIndex + splice)

// const foundIndex = phones.findIndex(p => p.id === 10);
// console.log(foundIndex); // поверне індекс 10 (не плутати з id! це різні десятки)

// if (foundIndex !== -1) {
//     phones.splice(10, 1)
// };
// console.table(phones);  // splice видалив з масива phones телефон з id 10, тепер в нашому масиві початковому 99 обєктів з телефонами



// 5. Отримати масив з телефонами, ціна яких нижча на 5% від вихідної

// const salesPhones = phones.map(p => {
//     const phoneCopy = {...p};  // для кожного телефона створюємо копію
//     phoneCopy.price = Math.round(phoneCopy.price * 0.95);  // кожній копії міняємєм ціну, price * 0.95 = ціна на 5% менша ві початкової

//     return phoneCopy; // повертаємо копію телефона з зміненою ціною
// })
// console.table(salesPhones);

// 6. Вивести бренд + модель телефонів з Nfc

                                            // тут нетреба розписувати якщо тру то тру = цей вираз вже означає щоб у фільтр попали ті що тру
// const withNfcPhones = phones.filter(p => p.isNfc);   // спершу відфільтрувати ті, що мають Nfc

// withNfcPhones.forEach(p => {                             // потім через forEach виводити бренд і модель з відфільтрованих
//     console.log(`Brand: ${p.brand}, model: ${p.model}`);
// })
// console.table(withNfcPhones);

// Коли один метод повертає результат того ж типу (в даному випадку масив) ми можем застсовувати й інші методи в цьому ж місці. Нетреба розписувати цілу простиню функціоналу.
// Тут метод filter повертає масив, тому одразу до повернутого масиву ми застосовуєм forEach

// const withNfcPhones = phones
//     .filter(p => p.isNfc)
//     .forEach(p => console.log(`Brand: ${p.brand}, model: ${p.model}`));

// console.log(withNfcPhones); // тут повернеться undefined, тому що останнім є метод forEach(який не створює нового масиву, він порсто робить щось з кожним елементом масиву) але при цьому він повертає undefined. Оскільки ми його використовуємо прямо в змінній то в кінці цього ланцюжка змінній присвоюється значення undefined замість очікуваного масиву. Тобто консоль повиводить дані які ми хотіли в forEach але ми не отримаємо масиву в цій змінній. Краще в змінній використати лише filter, а forEach використати окремо з наступного рядка, тоді в змінну не присвоїться undefined




// 7. Вивести дані про моделі apple 2016 року (+ every, some)

// const apple2016phones = phones.filter(p => p.brand === 'Iphone' && p.releaseYear === 2016);

// apple2016phones.forEach(p => console.log(`Brand: ${p.brand}, Model: ${p.model}, Release year: ${p.releaseYear}, Color: ${p.color}`));

// console.table(apple2016phones);  // тут повернеться наповнена табличка тому що ми не використовували метод forEach в змінній)

// 8.* Перевірити чи є золоті телефони


// const isGoldPhone = phones.every(function(phone) {  // перевіряю чи в масиві всі телефони білі - отримую false тому що є білі і чорні
//     console.log(phone.color);
//     return phone.color === 'white';
// });
// console.log(isGoldPhone);

// const isGoldPhone = phones.some(function(phone) {  // перевіряю чи є в масиві хоча б один білий телефон - отримую true тому що є білі і чорні
//     console.log(phone.color);
//     return phone.color === 'white';
// });
// console.log(isGoldPhone);

// const isGoldPhone = phones.some(function(phone) {  // перевіряю чи є в масиві хоча б один золотий телефон - отримую false тому що є тільки білі і чорні, жодного золотого нема
//     // console.log(phone.color);
//     return phone.color === 'gold';
// });
// console.log(isGoldPhone);


// 9.* Перевірити чи всі телефони пізніше 2013р. випуску

// const isOlderThan2013 = phones.every(function(p) {  // перевіряю чи ВСІ телефони масиву випущені пізніше ніж 2013р.
//     return p.releaseYear > 2013;
// });

// console.log(isOlderThan2013);  // отримую true, тому що ВСІ телефони масиву мають рік випуску більше ніж 2013р.

// те саме за допомогою стрілкової функції:

// const isOlderThan2013 = phones.every(p => p.releaseYear > 2013);
// console.log(isOlderThan2013);

// 10.* Дізнатись чи всі білі айфони з Nfc

// const whiteIphones = phones.filter(p => p.color === 'white' && p.brand === 'Iphone');
// const allWhitePhonesHaveNfc = whiteIphones.every(p => p.isNfc);
// console.log(allWhitePhonesHaveNfc);



// -----------------------------------------------------------------------------------
// Задачки від Gemini до масиву з телефонами



// Завдання 1: Знайти всі телефони Samsung, випущені після 2018 року.

// Використовуйте filter() для фільтрації масиву.
// Виведіть результат у консоль у вигляді таблиці (console.table()).


// const phonesAfter2018 = phones.filter(p => p.brand === 'Samsung' && p.releaseYear > 2018);
// console.table(phonesAfter2018);



// Завдання 2: Знайти перший телефон, ціна якого перевищує 10000.

// Використовуйте find() для пошуку першого елемента, що задовольняє умову.
// Виведіть результат у консоль.

// console.log(phones.find(p => p.price < 5000));


// Завдання 3: Створити новий масив, що містить лише моделі телефонів.

// Використовуйте map() для створення нового масиву.
// Виведіть результат у консоль.

// const phonesModels = phones.map(p => p.model);
// console.table(phonesModels);



// Завдання 4: Перевірити, чи є в масиві хоча б один телефон чорного кольору, випущений до 2017 року.

// Використовуйте some() для перевірки наявності елемента, що задовольняє умову.
// Виведіть результат у консоль.

// console.log(phones.some(p => p.color === 'black' && p.releaseYear < 2017));



// Завдання 5: Перевірити, чи всі телефони мають NFC.

// Використовуйте every() для перевірки, чи всі елементи задовольняють умову.
// Виведіть результат у консоль.


// console.log(phones.every(p => p.isNfc));


// Завдання 6: Знайти загальну вартість всіх телефонів у масиві.

// Використовуйте reduce() для обчислення суми цін.
// Виведіть результат у консоль.


// let initialValue = 0;
// const totalSum = phones.reduce((accumulator, phone) => accumulator + phone.price, initialValue);
// console.log(totalSum);


// Завдання 7: Створити масив, що містить тільки марку та модель телефонів, випущених після 2020 року.

// Використовуйте filter() для фільтрації та map() для створення нового масиву.
// Виведіть результат у консоль у вигляді таблиці.


// const phonesAfter2020 = phones
//     .filter(p => p.releaseYear > 2020)
//     .map(p => ({
//         brand: p.brand,
//         model: p.model
//     }));
// console.table(phonesAfter2020);


// Завдання 8: Знайти телефон з найнижчою ціною.

// Використовуйте reduce() для пошуку мінімальної ціни.
// Використовуйте find() для пошуку телефону з цією ціною.
// Виведіть результат у консоль.

// const cheapestPhone = phones.reduce((cheapest, currentPhone) => {
//     if (currentPhone.price < cheapest.price) {
//         return currentPhone;
//     } else {
//         return cheapest;
//     }
// });

// console.log(cheapestPhone);


// Завдання 9: Знайти телефон з найпізнішим роком випуску.
// Вимоги:
// Використовуйте метод reduce() для пошуку телефону з найпізнішим роком випуску.
// Виведіть результат у консоль.
// Врахуйте випадок, коли масив phones може бути порожнім.


// const oldestPhone = phones.length > 0 
//     ? phones.reduce((oldest, currentPhone) => {
//         if (currentPhone.releaseYear > oldest.releaseYear) {
//             return currentPhone;
//         } else {
//             return oldest;
//         }
//     })
//     : undefined;

// console.log(oldestPhone);


// Завдання 10:

// Знайти телефон з найдовшою назвою моделі.

// Вимоги:

// Використовуйте метод reduce() для пошуку телефону з найдовшою назвою моделі.
// Виведіть результат у консоль.
// Врахуйте випадок, коли масив phones може бути порожнім.
// Підказки:

// Порівнюйте довжину назв моделей телефонів за допомогою властивості model.length.
// Використовуйте тернарний оператор для обробки порожнього масиву.
// Використовуйте приклад з попереднього завдання як шаблон.


// const longestPhoneModel = phones.length > 0 
//     ? phones.reduce((longest, currentModel) => {
//         if (currentModel.model.length > longest.model.length) {
//             return currentModel;
//         } else {
//             return longest;
//         }
//     })
//     : undefined;

// console.log(longestPhoneModel);


// Завдання 11:

// Знайти телефон з найвищою ціною.

// Вимоги:

// Використовуйте метод reduce() для пошуку телефону з найвищою ціною.
// Виведіть результат у консоль.
// Врахуйте випадок, коли масив phones може бути порожнім.
// Підказки:

// Порівнюйте ціни телефонів за допомогою властивості price.
// Використовуйте тернарний оператор для обробки порожнього масиву.
// Використовуйте приклад з попередніх завдань як шаблон.


// const mostExpensivePhone = phones.length > 0
//     ? phones.reduce((mostExpensive, currentPhone) => {
//         if (currentPhone.price > mostExpensive.price) {
//             return currentPhone;
//         } else {
//             return mostExpensive;
//         }
//     })
//     : undefined;

// console.log(mostExpensivePhone);


// Завдання 12:

// Знайти телефон з найдовшою назвою моделі серед телефонів, випущених після 2018 року.

// Вимоги:

// Використовуйте комбінацію методів масивів filter() та reduce().
// Спочатку відфільтруйте телефони, випущені після 2018 року.
// Потім знайдіть телефон з найдовшою назвою моделі серед відфільтрованих телефонів.
// Виведіть результат у консоль.
// Врахуйте випадок, коли відфільтрований масив може бути порожнім.
// Підказки:

// Використовуйте filter() для фільтрації телефонів за роком випуску.
// Використовуйте reduce() для пошуку телефону з найдовшою назвою моделі серед відфільтрованих телефонів.
// Використовуйте тернарний оператор для обробки порожнього відфільтрованого масиву.

const phonesAfter2018 = phones.filter(p => p.releaseYear > 2018);

const longestModelAfter2018 = phonesAfter2018.length > 0
    ? phonesAfter2018.reduce((longest, currentPhone) => {
        if (currentPhone.model.length > longest.model.length) {
            return currentPhone;
        } else {
            return longest;
        }
    })
    : undefined;

console.log(longestModelAfter2018);






// forEach - виконує колбек послідовно для всіх елементів масиву
// filter => новий масив з елементами, які задовільняють умови колбеку
// map => новий масив з елементами, які повернуті з колбеку для кожного елемента вихідного масива
// findIndex => індекс знайденого елемента (для якого з колбека повертається true, або -1, якщо його не знайдено (для кожного повертається false))
// every => true (виконується всім) / false
// some => true (виконується хоча б для одного) / false

// => - символ що означає ПОВЕРТАЄ





// Math.trunс() - метод Math який відкидає все що після крапки, зщалишаючи ціле число



// Завдання 1: Створення функції-конструктора "Автомобіль"

// Створіть функцію-конструктор Car, яка приймає наступні аргументи:

// brand (рядок) - марка автомобіля
// model (рядок) - модель автомобіля
// year (число) - рік випуску
// color (рядок) - колір автомобіля
// Функція-конструктор повинна створювати об'єкти з відповідними властивостями.

// Приклад використання:

// JavaScript

// const myCar = new Car('Toyota', 'Camry', 2022, 'Silver');
// console.log(myCar);


// function Car (brand, model, year, color) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }

// const myCar = new Car('Toyota', 'Camry', 2022, 'Silver');
// // const myCar = new Car('Mazda', 'MX30', 2021, 'White');
// console.log(myCar);


// Завдання 2: Додавання методу до функції-конструктора "Книга"

// Створіть функцію-конструктор Book, яка приймає наступні аргументи:

// title (рядок) - назва книги
// author (рядок) - автор книги
// pages (число) - кількість сторінок
// Додайте до функції-конструктора метод getDescription(), який повертає рядок з описом книги у форматі "Назва: [назва], Автор: [автор], Сторінок: [кількість сторінок]".

// function Book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.getDescription = function() {
//         return `Назва: ${this.title}, Автор: ${this.author}, Сторінок: ${this.pages}`;
//     };
// }

// const myBook = new Book('Stiven King', 'It', 520);
// console.log(myBook);
// console.log(myBook.getDescription());



// Завдання 3: Створення масиву об'єктів "Студент"

// Створіть функцію-конструктор Student, яка приймає наступні аргументи:

// name (рядок) - ім'я студента
// age (число) - вік студента
// grade (число) - оцінка студента
// Створіть масив з 5 об'єктів "Студент", використовуючи функцію-конструктор.

// Приклад використання:

// JavaScript

// const students = [
//   new Student('John', 20, 85),
//   new Student('Jane', 22, 92),
//   // ...
// ];
// console.log(students);


// function Student(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
// }

// const students = [
//     new Student('John', 20, 85),
//     new Student('Anna', 19, 92),
//     new Student('Tura', 38, 96),
//     new Student('Natalia', 25, 75),
//     new Student('Daryna', 18, 86)
// ]

// console.log(students);



// Завдання 4: Створення функції-конструктора "Прямокутник"

// Створіть функцію-конструктор Rectangle, яка приймає наступні аргументи:

// width (число) - ширина прямокутника
// height (число) - висота прямокутника
// Додайте до функції-конструктора методи getArea() та getPerimeter(), які повертають площу та периметр прямокутника відповідно.

// Приклад використання:

// JavaScript

// const myRectangle = new Rectangle(10, 5);
// console.log(myRectangle.getArea());
// console.log(myRectangle.getPerimeter());

// function Rectangle(width, height){
//     this.width = width;
//     this.height = height;
//     this.getArea = function(){
//         return this.width * this.height;
//     };
//     this.getPerimeter = function() {
//         return (this.width + this.height) * 2;
//     }
// }

// const myRectangle = new Rectangle(5, 7);
// console.log(myRectangle);
// console.log(myRectangle.getArea());
// console.log(myRectangle.getPerimeter());