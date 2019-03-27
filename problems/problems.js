
/** Array Functions **/
/*
0. Sa se scrie o functie care primeste array-ul de mai jos ca parametru si returneaza un array de numere unde toate numerele au fost adunate cu 2
*/
var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

function typeCastAndAdd(strArr) {
  let array = [];
  for (var i = 0; i < strArr.length; i++) {
    array.push(parseFloat(strArr[i]) + 2);
  }
  return array;
}

console.log('Typecast: ', typeCastAndAdd(strArr));

/* 
1. Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie si returneaza un array cu toate valorile corespunzatoare cheii din obiectele din array.
*/
const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

function pluck(demoArr, key) {
  let colors = [];

  for(let color of demoArr) {
    colors.push(color[key]);
  }

  return colors;
}

console.log(pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];

/*
2. Sa se implementeze o functie care returneaza ariile tuturor elementelor din array-ul de mai sus, aria e inaltime * latime.
// */
let areas = [];
const calculateArea = (array) => {
  
  let heights, widths, areas = [];
  heights = pluck(array, 'height');
  widths = pluck(array, 'width');

  for (var i = 0; i < heights.length; i++) {
    areas.push(heights[i] * widths[i]);
  }
  return areas;
}

console.log(calculateArea(demoArr));

/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus unde elementele au aria mai mica sau egala cu 100
*/
const filterArr = (array) => {
  return areas.filter(area => area <= 100);
}
console.log(filterArr(demoArr));

/*
4. Sa se implementeze o functie numita reject, care primeste un array si o functie iterator. Functia iterator primeste cate un element din array ca si parametru si trebuie sa returneze true sau false. Daca returneaza true, elementul in cauza nu va fi inclus de functia parinte in array-ul rezultat. Daca returneaza false va fi inclus.
*/
const reject = (array, iterator) => {
  return array.filter(elem => !iterator(elem));
}

const iterator = (elem) => {
  return elem.height >= 10;
}

console.log(reject(demoArr, iterator)); // sa returneze un array de obiecte cu height < 10

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/
const findColor = (array, color) => {
  return result = array.find(element => element.color === color);
}
console.log(findColor(demoArr, 'crimson'));

/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= 10, false altfel.
*/
const areasAreBigger = (array, area) => {
  let allAreas = calculateArea(array);

  if (allAreas.every(elem => elem >= area)) {
    return true;
  } else return false;
}

console.log(areasAreBigger(demoArr, 10))

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele array-ului are culoarea 'green';
*/
const atLeastOneIsOfColor = (array, color) => {
  if (array.some(elem => elem.color === color)) {
    return true;
  } else return false;
}
console.log(atLeastOneIsOfColor(demoArr, 'balarie'));

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/
const sumOfDistances = (array) => {

  let distances = pluck(array, 'distance');
  return distances.reduce((x, y) => x + y);

  // return array.reduce((s, elem) => s + elem.distance, 0);

  //   let sum = 0;
  //   for (var i = 0; i < array.length; i++) {
  //    sum += array[i].distance;
  //  }
  //   return sum;
}
console.log('Sum of distances: ', sumOfDistances(demoArr));

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate ori apare fiecare culoare in parte in array-ul de obiecte. {red: 2, blue: 1, etc...}
*/
const noColors = (array) => {
  let colors = pluck(array, 'color');
  
  return colors.reduce(function (elem, curr) {
    if (typeof elem[curr] == 'undefined') {
      elem[curr] = 1;
    } else {
      elem[curr] += 1;
    }
    return elem;
  }, {});
}

console.log('Number of colors: ', noColors(demoArr));

/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/
const uniqueColors = (array) => {
  let distinctColors = [...new Set(array.map(item => item.color))];
  return distinctColors;
}

console.log('Unique Colors: ', uniqueColors(demoArr));

/*
11. Sa se scrie o functie care inverseaza doua numere.
*/
let a = 5, b = 8;

[a,b] = [b,a];

console.log('A:', a, 'B:', b);

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const objClasses = [];

for (var i = 0; i < classes.length; i++) {
  objClasses.push({
    subject: classes[i][0],
    time: classes[i][1],
    teacher: classes[i][2]
  });
}

console.log(objClasses);