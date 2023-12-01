// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };

  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) { // 2
  
    // Only change code below this line
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);
// The above show that it is difficult to bug code if the original array or variable is changed

// 1. Don't change things
// In Functional Programming, one of the core principles is to not change because changes lead to bugs
// Pure function - doesn't cause mutation and side effects

// The global variable
let fixedValue = 4;

// Pure function
function incrementer() {
  let val = fixedValue;
  return val + 1;

}
// console.log(fixedValue); // 4
// console.log(incrementer()); // 5

// 2. Declare dependencies explicitly
// Pass a variable or object directly into the function as an argument
// The global variable

// Pure function that takes parameter
function incrementer(fixedValue) {
  return fixedValue + 1;
}

// console.log(fixedValue); // 4
// console.log(incrementer(4)); // 5

// DAY 2
// array with object elements
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

// map method reads the element of an array
// map method has callback function, here the callback function has argument user and return the name of the object
const names = users.map(user => user.name);
//console.log(names); // [ 'John', 'Amy', 'camperCat' ]

// arrow function is a callback function, 
// callback function takes an argument and return value multiplied by 5
const product = arg => arg * 5;
// console.log(product(5)); // 25

const arr = [1, 2, 3, 4, 5];
// arr is called with map method to read the elements
// map created new array
// map should have callback function
// map automatically passed elements of the arr as an argument so no need to defined any variables with result is called
//elem represent each elements of the arr and return value multiplied by 2
const result = arr.map(elem => elem * 2);
// console.log(result) // [ 2, 4, 6, 8, 10 ]

// map automatically passed elements as argument for Math.sqrt
// Math.sqrt is a callback function
const resSqrt = arr.map(Math.sqrt);
// console.log(resSqrt); // [ 1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979 ]

// create an array with objects as element
const objArr = [
  {name: "Ali", age: 26},
  {name: "Hasan", age: 74}
];

// objArr with map return new array with objects element
const resObj = objArr.map(elem => ({
  name: elem.name,
  age: elem.age
}));
// console.log(resObj) // [ { name: 'Ali', age: 26 }, { name: 'Hasan', age: 74 } ]

// forEach loop to imitate how map() method works
// sort of review
const fruits = ['Apple', 'Banana', 'Orange'];

function myFunction(item, index){
    return index + 1 +". "+ item;
}
// forEach is a method that takes function
// used for iterating over each element of the array 
// and executing a provided callback function for each element.
// callback functon takes parameteres such as item, index, soon
fruits.forEach(myFunction);
// Output
// 1. Apple
// 2. Banana
// 3. Orange

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  // item, index, array is part of the original params.
  function myFunction(item, index, array){
    newArray.push(callback(item, index, array));
  }
  // this referring to the array
  this.forEach(myFunction);
  // Only change code above this line
  return newArray;
};
// this
// console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()));
// myMap takes callback function
// it has an element is a parameter
// it returns certain result

// [ 'NAOMI', 'QUINCY', 'CAMPERBOT' ]

// DAY 3
// convert object to a JSON string
const animal = {
  name: "dog",
  color: 'black'
};
const toJson = JSON.stringify(animal);
// console.log(toJson); // {"name":"dog","color":"black"}
// console.log(typeof toJson); // string
// console.log(typeof animal); // object

// map method iterate an array or object, it passes arguments, each element, index of that element and the array
// create array with object as element
const animalArr = [
  {name: 'dog', color: 'brown'},
  {name: 'cat', color:'white'},
  {name: 'bird', color: 'brown'}
];
// maps the array and callback function return key-value pairs in an array
const resMap = animalArr.map(elem => ({
  name: elem.name,
  color: elem.color
}));
// console.log(resMap);
// filter the array and return truthy values in array
const resFilter = animalArr.filter(elem => elem.color == 'brown');
// console.log(resFilter);
// [ { name: 'dog', color: 'brown' }, { name: 'bird', color: 'brown' } ]

// implement filter method on a prototype
// make your own filter method that behaves same as filter method
Array.prototype.myFilter = function(callback){
  const newArray = []
  // create myFunction that takes, current elem, index of that elem and array
  function myFunction(elem, index, array){
    // condition if true elem will be pushed to the newArray
    // callback referring to the current callbac function that takes arguments
    if(callback(elem, index, array)){
      newArray.push(elem);
    }
  }
  // use forEach loop to iterate an array
  // this referring to the current array
  this.forEach(myFunction);
  return newArray
}
// console.log([23, 65, 98, 5, 13].myFilter(item => item % 2)); // [ 23, 65, 5, 13 ]
// console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)); // [ 1, 2, 5 ]

// use slice method for a pure function
function sliceArray(anim, beginSlice, endSlice){
  // slice create new array and doesn't mutate the original array
  return anim.slice(beginSlice, endSlice);
}
// slice method has two arguments, index of the beginning element and the index of the ending element (this is excluded)
const anim = ['Dog', 'Cat', 'Bird', 'Rat'];
// console.log(sliceArray(anim, 1, 3)); // [ 'Cat', 'Bird' ]

// splice method can be used to remove element/s from an array but it mutates the original array so,
// use slice method instead of splice(method)
function spliceArray(cities){
  const newArray = cities.slice(0, 3)
  return newArray;
}
const cities = ['Manila', 'Cebu', 'Davao', 'Iloilo', 'Tacloban'];
// console.log(spliceArray(cities)); // [ 'Manila', 'Cebu', 'Davao' ]
// console.log(cities); // [ 'Manila', 'Cebu', 'Davao', 'Iloilo', 'Tacloban' ] , unmutated


// see how splice mutate the original array
cities.splice(0, 3) // at index position 0 remove 3 elements
// console.log(cities); // [ 'Iloilo', 'Tacloban' ], mutated

// DAY 4
// create nonMutatingPush() using concat()
// push() mutates the original array so, it can't be used for functional programming
function nonMutatingPush(originalArr, attach){
  // use concat to combine two arrays without mutating the original array
  return originalArr.concat(attach);

}
const firstArr = [1, 2, 3]
const secondArr = [4, 5, 6];
// console.log(nonMutatingPush(firstArr, secondArr)); // [ 1, 2, 3, 4, 5, 6 ]

const even = [2, 4, 6, 8, 10];

// accumulator / total accumulates all the value return by a callback function
// current is the element being passed from an array
function makeOdd(accumulator, current, index, array){
  return accumulator + current;
}
// console.log(even.reduce(makeOdd)) // 30

// given an array with object elements
// use reduce to get the total sum of 64
const student = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
// total the accumulator
// elem represents each element of the array
const totalSum = student.reduce((total, elem) => total + elem.age, 0);
// console.log(totalSum); // 64

// use reduce to return an object {} with property the name of user and its value is age
const newObj = student.reduce((obj, elem) => {
  obj[elem.name] = elem.age;
  return obj;
}, {}); 
// console.log(newObj); // { John: 34, Amy: 20, camperCat: 10 }

// given the watch list array get the average IMDB rating of Christopher Nolan's movies
// map, filter and reduce used to get the desired output
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  
  let averageRating;
  // map array to create an array with element of object's name and rating
  // list represent each element in the array
  const mapArr = watchList.map(list => ({
    name: list.Director,
    rating: list.imdbRating
  }));
  // filter to create an array with Christopher Nolan and rating
  const filterArr = mapArr.filter(item => item.name == 'Christopher Nolan');
  // reduce to get the total sum of rating
  // rating is saved as string ("")
  const totalSum = filterArr.reduce((total, item) => total + parseFloat(item.rating), 0);
  // get the average
  averageRating = totalSum / filterArr.length;

  return averageRating;
}
// console.log(getRating(watchList)); // 8.675

// get the square of each positive integer
// decimal number is not an integer
// use higher-order function such as map, filter or reduce to solve complex problem like this
const squareList = arr => {
  // filter to create array with positive integer
  const filterArr = arr.filter(number => (
    Math.sign(number) == 1 && Number.isInteger(number)
  ));
  // map to get the square of each element
  const squareArr = filterArr.map(number => number**2);

  return squareArr;
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]); 
// console.log(squaredIntegers); // [16, 1764, 36]

// use sort method to sort an array but provide callback function to specify how to sort an array
// if a < b return -1, ascending array or a will come before b
// if a > b return 1, descending array or a will come after b
// if a == b return 0, remain unchanged

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b){
    return a === b ? 0: a < b ? -1: 1;
  });
}
// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// [ 'a', 'a', 'c', 'd', 'g', 'z' ]

function descendingOrder(arr){
  return arr.sort(function(a, b){
    // a < b returns 1 a will come after b
    return a === b ? 0: a < b ? 1: -1;
  });
}
// console.log(descendingOrder(["v", "d", "w", "x", "q", "u"]));
// [ 'x', 'w', 'v', 'u', 'q', 'd' ]

// DAY 5
// create a non-mutating sort
const numArr = [4, 8, 12, 4, 9, 23];

// since sort method mutates the original array, put original array into a new array using spread operator
function nonMutatingSort(arr){
  const newArr = [...arr];
  
  return newArr.sort(function(a, b){
    return a === b ? 0: a < b ? -1: 1;
  });
}
// console.log(nonMutatingSort(numArr)); // [ 4, 4, 8, 9, 12, 23 ] // order in ascending
// console.log(numArr); // [ 4, 8, 12, 4, 9, 23 ] remain unchanged

// split method splits string into an array
// split method takes delimiter or separator
// if sepator is " ", then string will be separated into words
const text = "What is your name?";
const splitRes = text.split(" ");
// console.log(splitRes); // [ 'What', 'is', 'your', 'name?' ]

// use split method to separate string into an array
function splitify(str) {
  // \W match everthing except letters and numbers
  return str.split(/\W/);
}
// console.log(splitify("Hello World,I-am code"));
// [ 'Hello', 'World', 'I', 'am', 'code' ]

// use join method to convert an array to a string
function joinMethod(arr){
  return arr.join(" ");
}
// console.log(joinMethod(['I', 'love', 'you'])); // I love you

// use split and join method 
const sampleStr = "May-God-bless-you";

function sampleStrJoin(str){
  // use split to get the word only
  const splitRes = str.split(/\W/);
  return splitRes.join(" ");
}
// console.log(sampleStrJoin(sampleStr)); // May God bless you

// convert string to url slugs, url slugs refer to the end of URL after "\"
function urlSlugs(title){
  return title
  .split(" ") // [ '', 'Graduation', 'is', 'coming' ]
  .filter(word => word !== "") // [ 'Graduation', 'is', 'coming' ]
  .join("-") // Graduation-is-coming
  .toLowerCase() // graduation-is-coming
}
// console.log(urlSlugs(" Graduation is coming")); // graduation-is-coming

// use every method to check every element if passes a particular condition
// it returns boolean value either true if all elements is true else false
function checkPositive(arrNum){
  return arrNum
    .every(currentValue => currentValue > 0);
}
// console.log(checkPositive([1, 2, 3, -4, 5])); // false

function greaterThanFive(arrNum){
  return arrNum
    .every(currentValue => currentValue > 5);
}
// console.log(greaterThanFive([9, 13, 6, 8, 15, 12])); // true

// use some method to check if any element passes a particular condition

function checkNegative(arrNum){
  return arrNum
    .some(currentValue => Math.sign(currentValue) === -1)
}
// console.log(checkNegative([1, 2, -5, 6, 7, 8])) // true

// arity of a function is the number of argument it requires
// currying function meaning converting function with multiple arguments into several functions with single argument in sequence
function curried(x){
  return function(y){
    return x + y;
  }
}
// console.log(curried(2)(3)); // 5

// use arrow function for currying function
const arrowCurried = x => y => x + y;
// console.log(arrowCurried(1)(3)); // 4

// store in a variable the first function with x argument
// use curried function above
const funcForY = curried(4);
// console.log(funcForY(5)); // 9

// partial application - applying few arguments to a function at a time

function impartialFn(x, y, z){
  return x + y + z;
}
const partialFn = impartialFn.bind(this, 20, 30);
// console.log(partialFn(10)); // 60