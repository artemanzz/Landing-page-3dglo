/* !!! Коллекции Map и Set */
/* ________________________________ */

const obj = {
  a: 5,
  b: 10
};

/* --- Map */
/* *** Коллекция Map хранит пары {ключ}: значение. Отличие от объекта - ключем может быть любой тип данных, не только строка */
const map = new Map();
map.set('car', {
  brand: 'mazda',
  model: 3
});

map.set(777, 'три топора') // 777 => три топора
  .set(null, 'даже так') // null => даже так
  .set(NaN, 'eeboy') // NaN => eeboy
  .set(undefined, 'неожиданно') // undefined => неожиданно

const obj = {
  name: 'art',
  age: 30
}

map.set(obj, 123); // объект является ключем

map.get(undefined); // 'неодижанно'
map.has(null); // true
map.size; // кол-во элементов

const map = new Map([
  [1, 'kekw'],
  [2, 'nekekw']
]);

map.get(1); // kekw

const collectMap = new Map([
  ['hello', 'world'],
  ['year', 1812]
]);

collectMap.delete('year'); // полностью удаляет элемент с ключем year
collectMap.clear(); // удаляет все элементы

for (let [key, value] of map) { // деструктуризация
  console.log(`ключ ${key} значение ${value}`);
}

/* *** Map следует использовать: когда ключи генерируется на этапе выполнения кода (динамически), когда выполняется много действий с парами ключ-значение (добавление удаление элементов),
когда необходимо перебирать ключ-значение */

/* --- Set */
const cars = new Set();
cars.add('Mazda')
  .add('Volvo')
  .add('BMW')
  .add('BMW'); // дублируемые элементы не добавляются. Коллекция содержит только уникальные значения

const cars = new Set(['Mazda', 'Volvo', 'BMW']);
const newCars = new Set(['Toyota', 'Bentley', 'Volvo']);

const allCars = new Set([...cars, ...newCars]); // Объединяем две предыдущие коллекции в одну через Spread оператор

/* *** Set стоит использовать когда приходится часто проверять значения, имеются ли элементы в коллекции или нет */