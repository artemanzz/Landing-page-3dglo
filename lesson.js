/* !!! ES6+ */


// ES5
function test() {
  const arg = Array.prototype.slice.call(arguments); // приходилось конвертировать псевдомассив в массив
}

test('red', 5, 12, 'black', [], true, 9);

// ES6
/* --- Rest параметр */

// ...arr - Rest параметр
function test(...arr) {
  console.log(arr); // получили массив переданных элементов
}

function test(a, b, c, ...arr) { // Rest параметр всегда последний
  console.log(arr); // получили массив переданных элементов
}

/* --- Spread параметр */

const arr = ['red', 5, 12];
const arr2 = ['black', true];

function test(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}

test(arr[0], arr[1], arr[2]);

// ...arr, ...arr2 - Spread параметры
test(...arr, ...arr2); // все элементы массива будут переданы по одному

const arr3 = [...arr, ...arr2]; // массив со всеми элементами arr1, arr2

const allImg = document.querySelectorAll('img'); // nodeList с ограниченным количеством свойств
const newImg = [...allImg]; // массив со многими свойствами

/* --- Деструктуризация объектов */

const car = {
  brand: 'mazda',
  model: 3,
  color: 'red'
}

// ES5
const brand = car.brand;
const model = car.model;
const color = car.color;

// ES6
const {
  brand,
  model
} = car; //создает переменные с таким же именем как свойства объекта

const car = {
  brand: 'mazda',
  model: 3,
  options: {
    color: 'red',
    abs: true
  }
}

const {
  options: {
    color,
    abs
  }
} = car;

// Практика
const createCar = ({
  brand,
  model,
  color,
  colorInt = 'black'
}) => {
  console.log(`
  Запущено производство автомобиля ${brand} ${model}
  цвет кузова: ${color}
  цвет салона ${colorInt}`);
};

createCar({
  brand: 'mazda',
  model: 3,
  color: 'blue'
});

const {
  brand,
  ...options
} = car; // бренд, массив опций

const cars = ['mazda', 'bmw', 'audi', 'zaz'];
const [a, , b, c] = cars; //a = mazda, b = audi, c = zaz

const cars = [
  ['mazda', 'bmw'],
  ['audi', 'zaz']
];
const [
  [a, b],
  [c, d]
] = cars; //a = mazda, b = audi, c = audi, d = zaz
const [
  [a, b],
  [...c]
] = cars; //a = mazda, b = audi, c = [audi, zaz]

const carsModel = {
  brand: 'Volvo',
  models: {
    sedan: ['s60', 's90'],
    cross: ['v60', 'v90']
  }
}

const {
  models: {
    sedan: [s1, s2],
    cross: [c1, c2]
  }
} = carsModel;
console.log(s1, s2, c1, c2); //s60 s90 v60 v90

// ES5
const car = 'bentley';
const cycle = 'bmx';
const bike = 'honda';

const transport = {
  car: car,
  cycle: cycle,
  bike: bike
}

// ES6
const transport = {
  car,
  cycle,
  bike,
  ride() {
    console.log(this);
  }
};

const transport = {
  bike: 'honda',
  car: 'bentley',
  cycle: 'bmx',
};

const newTransport = {
  bike: 'suzuki',
  quadBike: 'polaris'
}

// перезапись и добавление данных в объект из нового объекта
Object.assign(transport, newTransport);

//ES9
const ship = 'Photinya';
const curTrans = {
  ...transport,
  ...newTransport,
  ship
}